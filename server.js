const express = require('express')
const path = require('path')
const port = process.env.PORT || 3001
const app = express()

// Have Node serve the files for our built React app
const buildPath = path.normalize(path.join(__dirname, '/client/build'))
app.use(express.static(buildPath))

// Handle GET requests to /api route
app.get('/api', (req, res) => {
  setTimeout(() => {
    res.json({ message: 'Hello from server. '})
  }, 1000)
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, ()=> {
  console.log(`Server running on port ${port}`)
})