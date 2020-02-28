import React from "react"
import AddTodo from "./AddTodo";
import {useDispatch} from "react-redux";
import {reset} from "redux-form";
import {addItem} from "../../store/todoActions";

export type TPropsAddTodo = {
    addTodoItem: string
}

const AddTodoContainer = () => {
    const dispatch = useDispatch()
    const onSubmitHandler = (data:TPropsAddTodo) => {
        dispatch(addItem(data.addTodoItem))
        dispatch(reset('addTodo'))
    }
    return <AddTodo onSubmit={onSubmitHandler} />
};

export default AddTodoContainer;
