import {CheckBoxLine} from "./CheckBoxLine"

export function ItemSizes({sizes}){
    return (
        <div className={'item__sizes'}>
            {
                sizes.map(item => <CheckBoxLine key={item} size={item}/>)
            }
        </div>
    )
}