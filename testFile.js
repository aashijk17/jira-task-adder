import { addToJira } from "./addToJira.js";

const testAssignments = [
  {
    assignmentName: "HW1",
    className: "Biology",
    types: ["Lab", "Essay"],
    url: "https://example.com",
    dueDate: "2025-10-20",
    description: "Read chapter 1 and complete exercises"
  },
  {
    assignmentName: "Project 2",
    className: "Math",
    types: ["Problem Set"],
    url: "https://example.com/project2",
    dueDate: "2025-10-22",
    description: "Complete all assigned problems"
  }
];

addToJira(testAssignments)
  .then(() => console.log("✅ Done testing"))
  .catch(err => console.error("❌ Error testing", err));
