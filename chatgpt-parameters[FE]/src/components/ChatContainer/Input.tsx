import React from 'react'
import { TextInput, Group, Button, Loader } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import ChatImageUploadButton from './ChatImageUpload';
import { AiOutlineFileImage } from "react-icons/ai";
import {AiOutlineSend} from "react-icons/ai"
type InputProps = {
    handleSubmit: React.FormEventHandler<HTMLFormElement>,
    form: UseFormReturnType<{
        value: string;
    }, (values: {
        value: string;
    }) => {
        value: string;
    }>,
    isLoading: boolean
}

export default function Input({ handleSubmit, form, isLoading }: InputProps) {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Group position="center" mt="xs">
                    <TextInput disabled={isLoading} placeholder="Type something here..." color="white" size="md"
                        style={{ width: "50%" }}{...form.getInputProps('value')} icon={<AiOutlineSend/>} 
                        rightSection={isLoading ? <Loader color="gray" size="xs" />: <ChatImageUploadButton /> } />
                </Group>
            </form>

        </>
    )
}