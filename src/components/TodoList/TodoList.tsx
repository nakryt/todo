import React from "react"
import classes from "./TodoList.module.css"
import TodoListItem from "./TodoListItem/TodoListItem";
import {useSelector} from "react-redux";
import {getTodoList} from "../../store/todoSelectors";

const TodoList: React.FC = () => {
    const todo = useSelector(getTodoList)
    return (
        <ul className={`${classes.TodoList} list-group mb-3`}>
            {
                todo.map((item) =>
                    <TodoListItem key={item.id} {...item} />
                )
            }
        </ul>
    )
};

export default TodoList;
