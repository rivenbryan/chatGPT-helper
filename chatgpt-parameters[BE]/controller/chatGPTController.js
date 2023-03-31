

const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config({ path: '../.env' });




const sendChatMessage = async (req, res) => {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const allUserMessage = req.body
    const messageBodyToOpenAI = allUserMessage.map( (content) => ({
        role: "user",
        content,
    }))

    console.log(messageBodyToOpenAI)
    
    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: messageBodyToOpenAI,
        });
        console.log(completion.data.choices[0].message.content)
        // Do checking and extract out the component
        res.send(completion.data.choices[0].message.content)
    } catch (error) {
        console.log(error)
    }
}

const sendGenerateImage = async (req, res) => {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const messageDictionary = req.body
    messageDictionary["n"] = 1
    messageDictionary["size"] = "256x256"

    try {
        const response = await openai.createImage(messageDictionary);

        const image_url = response.data.data[0].url;
        res.send(image_url)
    } catch (error) {
        console.log(error.response.data)
    }
}

const chatGPTController = {
    sendChatMessage,
    sendGenerateImage,
}

module.exports = chatGPTController