import React, { useState } from 'react'

const DatePicker = (props) => {


    return (
        
        <div className ='datePicker'>
            <h4>Select Time Range</h4>
            <input
            type='date'
            value={props.dateFrom}
            onChange={(e) => props.setDateFrom(e.target.value)}>
            </input>
            -
            <input 
            type='date'
            value={props.dateTill}
            onChange={(e) => props.setDateTill(e.target.value)}>
            </input>
            
        </div>
        
        
    )
}

export default DatePicker
