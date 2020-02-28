import {TTodoState} from "../store/todoReducer";

export enum TChangeProp {
    'important' = 'important',
    'isEdit' = 'isEdit',
    'active' = 'active',
    'label' = 'label'
}

export const changeProps = (state: TTodoState, idElement: number, changeProp: TChangeProp, value?: string | boolean): TTodoState => {
    return {
        ...state,
        items: state.items.map((item) => {
            if (item.id === idElement) {
                return { ...item, [changeProp]: value ? value : !item[changeProp] }
            } else {
                return { ...item }
            }
        })
    }
}
