import {PlusSVG} from "../../assets/svg/PlusSVG"
import {MinusSVG} from "../../assets/svg/MunusSVG"

export function DoubleButton({count, handleMinusClick, handlePlusClick}){
    return(
        <div className={'double-button'}>
            <button
                className={`remove-button ${count === 1 ? 'disabled' : ''}`}
                onClick={handleMinusClick}
            >
                <MinusSVG/>
            </button>
            <span>{count}</span>
            <button className={'add-button'}
                    onClick={handlePlusClick}
            >
                <PlusSVG/>
            </button>
        </div>
    )
}
