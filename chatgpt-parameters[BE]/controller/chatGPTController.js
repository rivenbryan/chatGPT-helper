

const { Configuration, OpenAIApi } = require("openai");
const cloudinary = require('cloudinary').v2;

require('dotenv').config({ path: '../.env' });

const sendChatMessage = async (req, res) => {
    console.log(process.env.OPENAI_API_KEY)
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const allUserMessage = req.body
    const messageBodyToOpenAI = allUserMessage.map((content) => ({
        role: "user",
        content,
    }))

    console.log(messageBodyToOpenAI)

    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: messageBodyToOpenAI,
        });
        console.log("test")
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

const sendImageToChatGPT = async (req, res) => {
    console.log(req)
    /* Function to send image to cloudinary*/

    // Configuration 
    cloudinary.config({
        cloud_name: "dtoe0tsbf",
        api_key: "646339638971794",
        api_secret: "CgOX6hKAXMA9T-J2-Q5A2J6SlUI"
    });

    const resp = cloudinary.uploader.upload(req, { public_id: "olympic_flag" })

    resp.then((data) => {
        console.log(data);
        console.log(data.secure_url);
    }).catch((err) => {
        console.log(err);
    });


    // Generate 
    const url = cloudinary.url("olympic_flag", {
        width: 100,
        height: 150,
        Crop: 'fill'
    });






    // The output url
    console.log(url);
    /* Function to send the URL to OCR */

    /* Function to send the text to ChatGPT */


    console.log("hello")
    res.send('Hello World!')
};

const chatGPTController = {
    sendChatMessage,
    sendGenerateImage,
    sendImageToChatGPT
}

module.exports = chatGPTController