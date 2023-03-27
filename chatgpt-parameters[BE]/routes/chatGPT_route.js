const express = require("express")
const chatGPT_router = express.Router()

/*
* Initialise the controller files
*/
const chatGPTController = require("../controller/chatGPTController")

/*
* Set the different routes for backend API
*/

chatGPT_router.post("/request", chatGPTController.sendChatMessage)
chatGPT_router.post("/generateImage", chatGPTController.sendGenerateImage)

module.exports = chatGPT_router