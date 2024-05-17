// Create web server
const express = require('express');
const path = require('path');  // For handling file paths

const app = express();
const port = 3000;

// Set the root directory for serving static files (adjust as needed)
const rootDir = path.join(__dirname, 'public');  // Assuming public folder in project root

// Serve static files from the root directory
app.use(express.static(rootDir));

app.get('/', (req, res) => {
  // Serve the main HTML file for the root path (adjust as needed)
  res.sendFile(path.join(rootDir, 'index.html'));
});

// Additional routes for dynamic content or APIs can be added here

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
