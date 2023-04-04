import React from 'react'
import { useForm } from '@mantine/form';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { ChatMessageType } from "../../types/types"
import ChatMessage from './ChatMessage';
import Input from './Input';
import './ChatUI.css';

export default function ChatContent() {
    /* allChatMessage contains ALL chat message between User and ChatGPT */
    const [allChatMessage, setAllChatMessage] = useState<string[]>([]);

    /* allUserMessage contains ALL chat message from User  */
    const [allUserMessage, setAllUserMessage] = useState<string[]>([]);
    const isMountedRef = useRef(false);

    useEffect(() => {

        // This code will run only after the component has mounted
        if (isMountedRef.current) {
            console.log("UseEffect called! ")
            axios.post('http://localhost:5000/api/request', allUserMessage)
                .then(response => {
                    console.log(allUserMessage)
                    const newMessage = response as ChatMessageType
                    setAllChatMessage((previousArrayChatMessages) => {

                        const newArrayOfChatMessages: string[] = [...previousArrayChatMessages]
                        console.log(newArrayOfChatMessages)
                        /* We want to add in two content to our chatMessage
                        *  1. The chat message that user type
                        *  2. The chat message that Chat GPT response
                        */
                        newArrayOfChatMessages.push(allUserMessage[allUserMessage.length - 1])
                        newArrayOfChatMessages.push(newMessage.data)
                        console.log(newArrayOfChatMessages)
                        return newArrayOfChatMessages;
                    })
                })
                .catch(error => console.error(error));
        } else {
            /*
            * When useEffect is run for the first time, it sets isMountedRef to True
            */
            isMountedRef.current = true;
        }

    }, [allUserMessage]);

    const form = useForm({
        initialValues: {
            value: '',
        }
    });

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        console.log("Clicked!")

        const requestParameter = form.values;
        console.log(requestParameter)

        setAllUserMessage((prevArrayUserMessages) => {
            const newArrayOfUserMessages: string[] = [...prevArrayUserMessages];
            newArrayOfUserMessages.push(requestParameter.value);
            console.log(newArrayOfUserMessages);
            return newArrayOfUserMessages;
        });


    }

    return (
            <div className="chat-container">
                <div className="messages-container">
                    <ChatMessage allChatMessage={allChatMessage} />
                </div>
                <div className="input-container">
                    <Input handleSubmit={handleSubmit} form={form} />
                </div>
            </div>
    )
}