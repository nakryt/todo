export const CHANGE_IMPORTANT_ITEM = 'TODO/CHANGE_IMPORTANT_ITEM'
export const CHANGE_ACTIVE_ITEM = 'TODO/CHANGE_ACTIVE_ITEM'
export const DELETE_ITEM = 'TODO/DELETE_ITEM'
export const ADD_ITEM = 'TODO/ADD_ITEM'
export const CHANGE_FILTER = 'TODO/CHANGE_FILTER'
export const CHANGE_FIND_TEXT = 'TODO/CHANGE_FIND_TEXT'
export const CHANGE_IS_EDIT = 'TODO/CHANGE_IS_EDIT'
export const CHANGE_LABEL = 'TODO/CHANGE_LABEL'

export type TChangeImportant = {
    type: typeof CHANGE_IMPORTANT_ITEM
    id: number
}
export type TChangeIsEdit = {
    type: typeof CHANGE_IS_EDIT
    id: number
    value: boolean
}
export type TChangeActive = {
    type: typeof CHANGE_ACTIVE_ITEM
    id: number
}
export type TChangeLabel = {
    type: typeof CHANGE_LABEL
    id: number
    text: string
}
export type TDeleteItem = {
    type: typeof DELETE_ITEM
    id: number
}
export type TAddItem = {
    type: typeof ADD_ITEM
    text: string
}
export type TChangeFilter = {
    type: typeof CHANGE_FILTER
    filter: TFilterEnum
}
export type TFindText = {
    type: typeof CHANGE_FIND_TEXT
    text: string
}
export enum TFilterEnum {
    'all' = 'all',
    'important' = 'important',
    'done' = 'done',
    'active' = 'active'
}

export const changeImportant = (id: number):TChangeImportant => ({ type: CHANGE_IMPORTANT_ITEM, id})
export const changeIsEdit = (id: number, value: boolean):TChangeIsEdit => ({ type: CHANGE_IS_EDIT, id, value})
export const changeActive = (id: number):TChangeActive => ({ type: CHANGE_ACTIVE_ITEM, id})
export const changeLabel = (id: number, text: string):TChangeLabel => ({ type: CHANGE_LABEL, id, text})
export const deleteItem = (id: number):TDeleteItem => ({ type: DELETE_ITEM, id})
export const addItem = (text: string):TAddItem => ({ type: ADD_ITEM, text})
export const changeFilter = (filter: TFilterEnum):TChangeFilter => ({ type: CHANGE_FILTER, filter})
export const changeFindText = (text: string):TFindText => ({ type: CHANGE_FIND_TEXT, text})

export type TTodoActions = TChangeImportant | TChangeIsEdit | TDeleteItem |
    TAddItem | TChangeActive | TChangeFilter | TFindText | TChangeLabel
