import React from 'react'

const UserDropdown = ({onChange, items}) => {
    const handleSelectChange = (e) => {
        const filterCustomer = items.find(item => item.id == e.target.value)
        onChange(filterCustomer)
    }
    return (
        <>
            <select onChange={handleSelectChange}>
                {items?.map((item, index) => <option key={item.customerId} value={item.customerId}>{item.email}</option>)}
            </select>
        </>
    )
}

export default UserDropdown