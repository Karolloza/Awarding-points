import React from 'react'

const PeriodDropdown = ({onChange, title, items}) => {
    const handleSelectChange = (e) => {
        onChange(e.target.value)
    }
    return (
        <>
            <label>{title}</label>
            <select onChange={handleSelectChange}>
                {items.map((item, index) => <option key={index} value={item.value}>{item.name}</option>)}
            </select>
        </>
    )
}

export default PeriodDropdown