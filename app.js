const express = require('express');
const app = express();



app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html; charset=utf-8');
  res.send("<h1>Hello World From Node.js</h1>");
});

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server is runnig successfully on port: ${port}`);
});
