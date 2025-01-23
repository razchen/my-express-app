const express = require("express");
const cors = require("cors");
const app = express();

// Enable CORS for all origins (Adjust in production)
app.use(
  cors({
    origin: "*", // Allow all origins for testing
    methods: ["GET", "POST", "OPTIONS"], // Allowed methods
    allowedHeaders: ["Content-Type"], // Allowed headers
  })
);

// Middleware to parse JSON (if needed)
app.use(express.json());

// Route to test query parameters
app.get("/test", (req, res) => {
  const queryParams = req.query; // Extract query parameters
  res.json({
    message: "Query parameters received",
    queryParams,
  });
});

// Catch OPTIONS preflight requests
app.options("/test", (req, res) => {
  res.sendStatus(204); // No content for preflight response
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
