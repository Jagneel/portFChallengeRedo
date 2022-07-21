import React, { useState } from 'react'

const DatePicker = () => {

    const [dateFrom, setDateFrom ] = useState(new Date())
    const [dateTill, setDateTill ] = useState('2012/12/31')



    return (
        
        <div className ='datePicker'>
            <input
            type='date'
            selected={dateFrom} 
            onChange={(e) => setDateFrom(e.target.value)}>
            </input>
            -
            <input 
            type='date'
            value={dateTill} 
            onChange={(e) => setDateTill(e.target.value)}>
            </input>
        </div>
        
        
    )
}

export default DatePicker