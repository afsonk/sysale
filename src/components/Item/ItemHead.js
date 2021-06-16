import {useState} from 'react'
import {CircleSVG} from '../../assets/svg/CircleSVG'
import image from "../../assets/img/image.png"
import hoveredImage from '../../assets/img/hovered.png'


export function ItemHead(){
    const [active, setActive] = useState(false)
    const [isHover, setIsHover] = useState(false)

    const handleCircleClick = () => {
        setActive(prev => !prev)
    }

    return (
        <div className={'item__head'}>
            <span className={'item__new'}>new</span>
            <div className={'image-wrapper'}
                 onMouseEnter={() => setIsHover(true)}
                 onMouseLeave={() => setIsHover(false)}
            >
                <img className={'item__img'}
                     src={!isHover ? image : hoveredImage} alt="item"
                />
            </div>
            <span className={`item__сircle ${active ? 'active' : ''}`} onClick={handleCircleClick}>
                <CircleSVG active={active}/>
            </span>
        </div>
    )
}