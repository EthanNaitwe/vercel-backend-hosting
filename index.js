const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;


// const express = require('express');
// const app = express();
// const port = 3000;

// // Middleware
// app.use(express.json());

// // Sample route
// app.get('/', (req, res) => {
//     res.status(200).json({ message: 'Hello from Express!' });
// });

// // Start the server (this part will be removed for serverless)
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });



// // Vercel
// // api/express-server.js

// const express = require('express');
// const app = express();

// // Middleware
// app.use(express.json());

// // Sample route
// app.get('/', (req, res) => {
//     res.status(200).json({ message: 'Hello from Express!' });
// });

// // Export the Express app as a serverless function
// module.exports = (req, res) => {
//     app(req, res);  // Pass the request and response to Express
// };
