import {
    ADD_ITEM,
    CHANGE_ACTIVE_ITEM,
    CHANGE_FILTER,
    CHANGE_FIND_TEXT,
    CHANGE_IMPORTANT_ITEM,
    CHANGE_IS_EDIT,
    CHANGE_LABEL,
    DELETE_ITEM,
    TFilterEnum,
    TTodoActions
} from "./todoActions";
import {TTodos} from "../types/todoTypes";
import {changeProps, TChangeProp} from "../utils/changeProp";

const initialState = {
    items: [
        { id: 0, label: 'Drink coffee', important: false, active: false, isEdit: false},
        { id: 1, label: 'Create Awesome App', important: true, active: true, isEdit: false},
        { id: 2, label: 'Have a lunch', important: false, active: true, isEdit: false}
    ] as TTodos,
    findText: '' as string,
    filter: TFilterEnum.all as TFilterEnum
}

export type TTodoState = typeof initialState

const todoReducer = (state = initialState, action:TTodoActions):TTodoState => {
    switch (action.type) {
        case CHANGE_IMPORTANT_ITEM:
            return changeProps(state, action.id, TChangeProp.important)
        case CHANGE_IS_EDIT:
            return changeProps(state, action.id, TChangeProp.isEdit, action.value)
        case CHANGE_ACTIVE_ITEM:
            return changeProps(state, action.id, TChangeProp.active)
        case CHANGE_LABEL:
            return changeProps(state, action.id, TChangeProp.label, action.text)
        case DELETE_ITEM:
            return { ...state, items: state.items.filter(item => item.id !== action.id) }
        case ADD_ITEM:
            const { items } = state
            const newItem = { id: items[items.length - 1].id + 1, label: action.text, important: false, active: true, isEdit: false }
            return { ...state, items: [...items, newItem]}
        case CHANGE_FILTER:
            return { ...state, filter: action.filter }
        case CHANGE_FIND_TEXT:
            return { ...state, findText: action.text }

        default:
            return state

    }
}


export default todoReducer
