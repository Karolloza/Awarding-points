import React, { useState, useEffect } from 'react'
import { fetchCustomers } from '../api'
import PeriodDropdown from '../components/PeriodDropdown'
import TimeStamp from '../components/TimeStamp'
import UserDropdown from '../components/UserDropdown'
import {dropDownItems} from '../utils'

const Dashboard = () => {
    const [selectedPeriod, setSelectedPerios] = useState('q1')
    const [customersData, setCustomersData] = useState()
    const [selectedCustomer, setSelectedCustomer] = useState()

    useEffect(() => {
        fetchCustomers().then(res => {setCustomersData(res); setSelectedCustomer(res[0])})
    },[])

  return (
    <div>
        <div>Select customer: < UserDropdown onChange={setSelectedCustomer} items={customersData}/></div>        

        <div>Customer: {selectedCustomer?.name} {selectedCustomer?.surname}</div>        
        <PeriodDropdown onChange={setSelectedPerios} title="Select period" items={dropDownItems}/>
        <TimeStamp period={selectedPeriod} data={selectedCustomer}/>
    </div>
  );
};

export default Dashboard;
