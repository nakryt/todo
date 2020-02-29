import React from "react"
import classes from "./AddTodo.module.css"
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux";
import {addItem} from "../../store/todoActions";

type TFormData = {
    todo: string;
};

const AddTodo:React.FC = () => {
    const { register, handleSubmit, reset } = useForm<TFormData>();
    const dispatch = useDispatch()
    const onSubmit = handleSubmit(({ todo }:TFormData) => {
        dispatch(addItem(todo))
        reset()
    });

    return (
        <form className={classes.AddTodo} onSubmit={onSubmit}>
            <input name="todo" ref={register({ required: true })} />
            <button className='btn btn-success'>Add</button>
        </form>
    );
}

export default AddTodo
