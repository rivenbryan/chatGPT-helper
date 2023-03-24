
const axios = require('axios');

const sendChatMessage = async (req ,res) => {
    const body = req.body
    try {
        const response = await axios.post('https://chatgpt-api.shn.hk/v1/', body, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
        const message = response.data.choices[0].message.content
        res.send(message)
    } catch (error) {
        console.log(error)
        res.status(500).send('Something went wrong!');
    }
}

const chatGPTController = {
    sendChatMessage
}

module.exports = chatGPTController