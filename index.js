// const express = require('expresss');
// const app =express();
// 
// app.get('/', (req, res) => {
    // res.send({hi:'there'});
// });
// 
// app.listen(5000);
const express = require('express');  // Fixed typo: 'expresss' to 'express'
const app = express();  // Added space for readability

app.get('/', (req, res) => {
    res.send({ bye: 'buddy' });  // Properly formatted object
});

const PORT =process.env.PORT || 3000;
app.listen(PORT);

// app.listen(5001, () => {
//     console.log('Server is running on port 5001');  // Added a console log for server status
// });