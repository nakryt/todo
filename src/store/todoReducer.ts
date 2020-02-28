// import {TTodoState} from "../types/todoReducerTypes";
import {TTodoActions, CHANGE_IMPORTANT} from "./todoActions";

const initialState = {
    items: [
        { id: 0, label: 'Drink coffee', important: false, active: true},
        { id: 1, label: 'Create Awesome App', important: true, active: true},
        { id: 2, label: 'Have a lunch', important: false, active: true}
    ]
}

export type TTodoState = typeof initialState

const todoReducer = (state = initialState, action:TTodoActions):TTodoState => {
    switch (action.type) {
        case CHANGE_IMPORTANT:
            return {
                items: state.items.map((item) => {
                    if (item.id === action.id) {
                        return { ...item, important: !item.important }
                    } else {
                        return { ...item }
                    }
                })
            }
        default:
            return state

    }
}

export default todoReducer
