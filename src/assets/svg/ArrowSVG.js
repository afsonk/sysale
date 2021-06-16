

export const ArrowSVG = ({active}) => {
    return (
        <svg className={`arrow__svg ${active ? 'active' : ''}`} xmlns="http://www.w3.org/2000/svg" width="11" height="7"
             viewBox="0 0 11 7" fill="none">
            <path d="M1 1L5.5 6L10 1" stroke="#2c2c2c"/>
        </svg>
    )
}