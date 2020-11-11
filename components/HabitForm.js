import { Form, Field } from '@leveluptuts/fresh';

const HabitForm = () => {
    return (
        <Form
            onSubmit={data => {
                console.log(data)
            }}
        >
            <Field>Habit</Field>
        </Form>
    )
}

export default HabitForm;