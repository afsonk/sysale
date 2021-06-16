import {useState} from 'react'
import {CheckoutButton} from "./CheckoutButton"
import {DoubleButton} from "./DoubleButton"
import {ItemText} from "./ItemText"
import {ItemSizes} from "./ItemSizes"
import {ItemHead} from "./ItemHead"
import {Dropdown} from "./Dropdown"
import {Price} from "./Price"

export function Item() {
    const initialPrice = 200
    const [count, setCount] = useState(1)
    const [currentPrice, setCurrentPrice] = useState(initialPrice)

    const colors = ['Желтый', 'Красный', 'Зеленый']
    const sizes = [100, 200, 300]

    const handlePlusClick = () => {
        setCount(prev => prev + 1)
        setCurrentPrice(prev => prev + initialPrice)
    }
    const handleMinusClick = () => {
        setCount(prev => prev - 1)
        setCurrentPrice(prev => prev - initialPrice)
    }

    return (
        <div className={'item'}>
            <ItemHead/>
            <ItemText/>
            <div className={'item__colors'}>
                <Dropdown colors={colors}/>
                <Price currentPrice={currentPrice}/>
            </div>
            <ItemSizes sizes={sizes}/>
            <div className={'item__bottom'}>
                <DoubleButton count={count}
                              handlePlusClick={handlePlusClick}
                              handleMinusClick={handleMinusClick}
                />
                <CheckoutButton/>
            </div>
        </div>
    )
}