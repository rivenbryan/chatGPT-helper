import React from 'react'
import { TextInput, Group, Button } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import ChatImageUploadButton from './ChatImageUpload';
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
                    <TextInput color= "white" style={{width: "80%"}}{...form.getInputProps('value')}  />
                    <Button color="gray" loading={isLoading} type="submit">Send</Button>
                    <ChatImageUploadButton />
                </Group>
            </form>

        </>
    )
}