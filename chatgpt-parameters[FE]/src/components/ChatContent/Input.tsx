import React from 'react'
import { TextInput, Group, Button } from '@mantine/core';
import { useForm, UseFormReturnType } from '@mantine/form';
type InputProps = {
    handleSubmit: React.FormEventHandler<HTMLFormElement>,
    form: UseFormReturnType<{
        value: string;
    }, (values: {
        value: string;
    }) => {
        value: string;
    }>
}

export default function Input({ handleSubmit, form }: InputProps) {
    return (
        <>


            <form onSubmit={handleSubmit}>

                <Group position="center" mt="xs">
                    <TextInput style={{width: "80%"}}{...form.getInputProps('value')}  />
                    <Button type="submit">Send</Button>
                </Group>
            </form>

        </>
    )
}