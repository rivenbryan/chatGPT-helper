import { TextInput, Checkbox, Button, Group, Box, MantineProvider, Text } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function App() {
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    }
  });
//test
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Welcome to Mantine!</Text>
      <Box maw={300} mx="auto">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps('email')}
          />

          <Checkbox
            mt="md"
            label="I agree to sell my privacy"
            {...form.getInputProps('termsOfService', { type: 'checkbox' })}
          />

          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </MantineProvider>
  )
}