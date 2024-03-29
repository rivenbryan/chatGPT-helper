const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const chatGPT_router = require("./routes/chatGPT_route")
var cors = require('cors')


/*
* Middleware called ody-parser -> responsible for parsing the request body
* so that we can print values onto node.js console.log
* Middleware called CORs-> responsible for parsing the request FE to BE
*/

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors({
  origin : "http://localhost:3000",
  credentials: true
}))

app.use((req, res, next)=> {
  console.log(req.path, req.method)
  next()
})

/*
* Routes for API
*/
app.use('/api', chatGPT_router)

/*
* Listening to port
*/
const port = 5000; // or any other port number you want to use
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});