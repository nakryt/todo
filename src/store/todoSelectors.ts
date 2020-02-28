import {TStore} from "./store";
import {createSelector} from "reselect";
import {TFilterEnum} from "./todoActions";

export const getTodo = (state:TStore) => state.todo
export const getTodos = createSelector(getTodo, todo => todo.items)
export const getFindText = createSelector(getTodo, todo => todo.findText)
export const getFilter = createSelector(getTodo, todo => todo.filter)
export const getTodoWithFilter = createSelector(getTodos, getFilter,
    (items, filter) => {
    if (filter === TFilterEnum.all) {
        return items
    } else if (filter === TFilterEnum.done) {
        return items.filter(item => !item[TFilterEnum.active])
    }
    return items.filter(item => item[filter])
})
export const getTodoList = createSelector(getTodoWithFilter, getFindText,
        (todo, findText) =>
            findText.length ? todo.filter(item => item.label.toLowerCase().indexOf(findText.toLowerCase()) > -1) : todo
        )
export const getCountAllTodo = createSelector(getTodos, items => items.length)
export const getCountDoneTodo = createSelector(getTodos, items => items.filter(item => !item.active).length)
