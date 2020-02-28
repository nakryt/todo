const require = (value:string) => (!value || !value.trim().length) && 'Required'

export default {
    require
}
