import express from "express";
import { addToJira } from "./addToJira.js"; // Import your function

// Set up the Express app
const app = express();
const port = process.env.PORT || 3000; // Use Render's port or 3000 for local

// Middleware to parse JSON request bodies
app.use(express.json());

// A simple root route to check if it's working
app.get("/", (req, res) => {
  res.send("Jira Task Adder is running. Send a POST request to /add-tasks.");
});

// The main endpoint that runs your function
app.post("/add-tasks", async (req, res) => {
  const assignments = req.body;

  // Basic validation
  if (!assignments || !Array.isArray(assignments)) {
    return res.status(400).json({ error: "Request body must be an array of assignments." });
  }

  try {
    // Call your function with the data from the request
    // We don't 'await' this so the server can respond immediately.
    // The script will continue running in the background.
    addToJira(assignments); 

    // Send an immediate "accepted" response
    res.status(202).json({ message: "Request received. Processing tasks." });

  } catch (err) {
    console.error("Error in /add-tasks endpoint:", err);
    res.status(500).json({ error: "An internal server error occurred." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});