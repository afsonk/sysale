

export function Price({currentPrice}){
    return (
        <div className={'price'}>
            <span className={'price__value'}>{currentPrice}</span>
            <span className={'price__currency'}>грн</span>
        </div>
    )
}