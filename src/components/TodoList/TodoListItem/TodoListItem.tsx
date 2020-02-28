import React from "react"
import classes from "./TodoListItem.module.css"
import ItemEditPanel from "../../UI/ItemEditPanel/ItemEditPanel"
import {useDispatch} from "react-redux"
import {changeActive, changeImportant, changeIsEdit, changeLabel, deleteItem} from "../../../store/todoActions"
import {TTodo} from "../../../types/todoTypes";
import TextWithEdit from "../../UI/TextWithEdit/TextWithEdit";

const TodoListItem: React.FC<TTodo> = ({ id, label, important = false, active, isEdit }) => {
    const cls = [classes.TodoListItem, important && classes.important]
    const dispatch = useDispatch()
    const onClickEdit = () => {
        dispatch(changeIsEdit(id, true))
    }
    const onClickImportant = () => {
        dispatch(changeImportant(id))
    }
    const onClickItem = () => {
        dispatch(changeActive(id))
    }
    const onClickDelete = () => {
        dispatch(deleteItem(id))
    }
    const onSaveHandler = (text:string) => {
        dispatch(changeLabel(id, text))
        dispatch(changeIsEdit(id, false))
    }
    const onCancelHandler = () => {
        dispatch(changeIsEdit(id, false))
    }
    return (
        <li className={`${cls.join(' ')} list-group-item`}>
            <TextWithEdit isEdit={isEdit} active={active} label={label}
                          onClick={onClickItem} onSave={onSaveHandler} onCancel={onCancelHandler}/>
            <ItemEditPanel onClickEdit={onClickEdit} onClickImportant={onClickImportant} onClickDelete={onClickDelete}/>
        </li>
    )
}


export default TodoListItem
