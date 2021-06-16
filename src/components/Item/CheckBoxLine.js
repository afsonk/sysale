

export function CheckBoxLine({size}) {
    return(
        <label className="label">
            {`${size} мл`}
            <input type="checkbox" defaultChecked={size === 100}/>
            <span className="checkmark"></span>
        </label>
    )
}