export type TTodo = {
    id: number
    label: string
    important: boolean
    active: boolean
    isEdit: boolean
}

export type TTodos = Array<TTodo>
