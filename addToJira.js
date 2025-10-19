import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

// ---------- CONFIGURE THESE ----------
const JIRA_BASE_URL = "https.sacchins.atlassian.net";
const PROJECT_KEY = "KAN";

// ---------- AUTH VALUES ----------
const EMAIL = process.env.JIRA_EMAIL;
const API_TOKEN = process.env.JIRA_API_TOKEN;

// ---------- HELPER: GET HEADERS (NEW!) ----------
// This function runs ONLY when it's called
function getHeaders() {
  // Check for credentials
  if (!EMAIL || !API_TOKEN) {
    console.error("FATAL: JIRA_EMAIL or JIRA_API_TOKEN environment variable is not set.");
    // This will stop the function, but not crash the whole server
    throw new Error("Missing Jira credentials in environment."); 
  }
  
  return {
    "Authorization": `Basic ${Buffer.from(`${EMAIL}:${API_TOKEN}`).toString("base64")}`,
    "Accept": "application/json",
    "Content-Type": "application/json"
  };
}

// ---------- HELPER: CHECK IF TASK EXISTS ----------
async function taskExists(summary, dueDate) {
  const headers = getHeaders(); // Get headers just-in-time
  const jql = `project=${PROJECT_KEY} AND summary~"${summary}" AND duedate="${dueDate}"`;
  const response = await fetch(`${JIRA_BASE_URL}/rest/api/3/search?jql=${encodeURIComponent(jql)}`, { headers });
  const data = await response.json();
  return data.issues && data.issues.length > 0;
}

// ---------- CREATE A TASK ----------
async function createTask(a) {
  const headers = getHeaders(); // Get headers just-in-time
  const { assignmentName, className, types, url, dueDate, description } = a;

  // ... (rest of your createTask function is the same)
  const allLabels = [
    className.replace(/\s+/g, "").toUpperCase(),
    ...(types || []).map(type => type.replace(/\s+/g, "").toLowerCase())
  ];

  const body = {
    fields: {
      project: { key: PROJECT_KEY },
      summary: assignmentName,
      // ... (rest of body)
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
    // ... (rest of your try/catch block)
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
  try {
    for (const a of assignments) {
      const exists = await taskExists(a.assignmentName, a.dueDate);
      if (exists) {
        console.log(`⚠️ Skipping duplicate: ${a.assignmentName}`);
        continue;
      }
      await createTask(a);
    }
  } catch (err) {
    // This will catch the "Missing Jira credentials" error
    console.error("Failed to process Jira tasks:", err.message);
  }
}