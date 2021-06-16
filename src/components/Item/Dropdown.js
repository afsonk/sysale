import {useState, useEffect, useRef} from 'react'
import {ArrowSVG} from "../../assets/svg/ArrowSVG"

export function Dropdown({colors}) {
    const [isActive, setIsActive] = useState(false)
    const [currentColor, setCurrentColor] = useState('')

    const ref = useRef()

    const handleDropdownClick = () => {
        setIsActive(prev => !prev)
    }

    const handleOutsideClick = (e) => {
        if (!e.path.includes(ref.current)) {
            setIsActive(false)
        }
    }

    const handleColorClick = (text) => {
        setCurrentColor(text)
        setIsActive(false)
    }


    useEffect(() => {
        if (isActive) {
            document.addEventListener("mousemove", handleOutsideClick)
        }
    }, [isActive])

    return (
        <div className={`dropdown ${isActive ? 'active' : ''}`} ref={ref}>
            <div className={'dropdown__top'} onClick={handleDropdownClick}>
                <span className={'dropdown__label'}>{currentColor ? currentColor : 'Цвет'}</span>
                <span className={'dropdown__arrow'}>
                       <ArrowSVG active={isActive}/>
                </span>
            </div>
            <ul className={`dropdown__list ${isActive ? 'active' : ''}`}>
                {
                    colors.map(item => <li key={item}
                                           onClick={() => handleColorClick(item)}
                                           className={`${currentColor === item ? 'active' : ''}`}
                    >
                        {item}
                    </li>)
                }
            </ul>
        </div>
    )
}