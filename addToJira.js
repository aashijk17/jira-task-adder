
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

// ---------- CONFIGURE THESE ----------
const JIRA_BASE_URL = "https://sacchins.atlassian.net"; // your Jira domain
const PROJECT_KEY = "KAN"; // your Jira project key

// ---------- AUTH HEADER ----------
const EMAIL = process.env.JIRA_EMAIL;
const API_TOKEN = process.env.JIRA_API_TOKEN;

const headers = {
  "Authorization": `Basic ${Buffer.from(`${EMAIL}:${API_TOKEN}`).toString("base64")}`,
  "Accept": "application/json",
  "Content-Type": "application/json"
};

// ---------- HELPER: CHECK IF TASK EXISTS ----------
async function taskExists(summary, dueDate) {
  const jql = `project=${PROJECT_KEY} AND summary~"${summary}" AND duedate="${dueDate}"`;
  const response = await fetch(`${JIRA_BASE_URL}/rest/api/3/search?jql=${encodeURIComponent(jql)}`, { headers });
  const data = await response.json();
  return data.issues && data.issues.length > 0;
}

// ---------- CREATE A TASK ----------
async function createTask(a) {
  const { assignmentName, className, types, url, dueDate, description } = a;

const allLabels = [
  className.replace(/\s+/g, "").toUpperCase(),
  ...(types || []).map(type => type.replace(/\s+/g, "").toLowerCase())
];



  const body = {
    fields: {
      project: { key: PROJECT_KEY },
      summary: assignmentName,
      description: {
        type: "doc",
        version: 1,
        content: [
          {
            type: "paragraph",
            content: [
              { type: "text", text: description },
              { type: "text", text: "\n\n" },
              { type: "text", text: "View Assignment: " },
              {
                type: "text",
                text: url,
                marks: [{ type: "link", attrs: { href: url } }]
              }
            ]
          }
        ]
      },
      duedate: dueDate,
      labels: allLabels,
      issuetype: { name: "Task" }
    }
  };

  try {
    const response = await fetch(`${JIRA_BASE_URL}/rest/api/3/issue`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(`❌ Failed to create task "${assignmentName}"`);
      console.error(data);
      return;
    }

    const taskKey = data.key || JSON.stringify(data);
    console.log(`✅ Created: ${assignmentName} (${taskKey})`);
  } catch (err) {
    console.error(`❌ Error creating task "${assignmentName}"`);
    console.error(err);
  }
}

// ---------- EXPORTED FUNCTION ----------
export async function addToJira(assignments) {
  for (const a of assignments) {
    const exists = await taskExists(a.assignmentName, a.dueDate);
    if (exists) {
      console.log(`⚠️ Skipping duplicate: ${a.assignmentName}`);
      continue;
    }
    await createTask(a);
  }
}
