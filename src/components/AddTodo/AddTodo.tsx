import React from "react"
import classes from "./AddTodo.module.css"
import {Form, Field, reduxForm, InjectedFormProps} from "redux-form"
import {TPropsAddTodo} from "./AddTodoContainer";
import validate from "../../utils/validate"

const AddTodo: React.FC<InjectedFormProps<TPropsAddTodo>> = (props) => {
    return (
            <Form onSubmit={props.handleSubmit} className={classes.AddTodo}>
                <Field name='addTodoItem'
                       component={'input'}
                       placeholder='What do you want to do..?'
                       validate={[validate.require]}
                />
                <button type='submit' className='btn btn-success'>Add</button>
            </Form>
    )
};

export default reduxForm<TPropsAddTodo>({form: 'addTodo'})(AddTodo)
