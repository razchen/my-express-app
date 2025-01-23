const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Add axios for making HTTP requests
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

// Route to redirect to the server on port 8000
app.get("/redirect", async (req, res) => {
  try {
    // Make a request to the server on port 8000
    const response = await axios.get(
      `http://localhost:8000/test?code=234982345234`
    );

    // Return the response from the port 8000 server
    res.json({
      message: "Response from port 8000",
      data: response.data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error redirecting to port 8000",
      error: error.message,
    });
  }
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
