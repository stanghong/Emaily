const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // Use the PORT environment variable if available, otherwise default to 3000

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
