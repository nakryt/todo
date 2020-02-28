export const CHANGE_IMPORTANT = 'TODO/CHANGE_IMPORTANT'

export type TChangeImportant = {
    type: typeof CHANGE_IMPORTANT
    id: number
}

export const changeImportant = (id: number):TChangeImportant => ({ type: CHANGE_IMPORTANT, id})

export type TTodoActions = TChangeImportant
