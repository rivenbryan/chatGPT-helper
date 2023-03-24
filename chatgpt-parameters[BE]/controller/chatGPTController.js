
const axios = require('axios');

const sendChatMessage = async (req ,res) => {
    const messageDictionary = req.body
    messageDictionary['role'] = 'user';

    const chatAPIcontent = { 
        "model": "gpt-3.5-turbo", 
        "messages": [ 
            messageDictionary, 
            
            ] 
    }
    
    try {
        const response = await axios.post('https://chatgpt-api.shn.hk/v1/', chatAPIcontent, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
        const message = response.data.choices[0].message.content
        console.log(message)

        res.send({text: "5", component: "comment"})
    } catch (error) {
        console.log(error)
        res.status(500).send('Something went wrong!');
    }
}

const chatGPTController = {
    sendChatMessage
}

module.exports = chatGPTController