const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const chatGPT_router = require("./routes/chatGPT_route")

/*
* Middleware called ody-parser -> responsible for parsing the request body
*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', chatGPT_router)

const port = 3000; // or any other port number you want to use
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});