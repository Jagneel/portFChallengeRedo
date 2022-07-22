import React from 'react'

const AbvFilter = (props) => {

    const handleChange = (e) => {
        props.setAbvLow(e.target.value)

    }


    return (
        <div>
        <h4>Select Abv Range</h4>
        <form>
            <input type="number" step='any' onChange={handleChange} placeholder={'Input lower range'}/>
            -
            <input type="number" step='any' onChange={(e) => props.setAbvHigh(e.target.value)} placeholder={'Input higher range'}/>
        </form>
        </div>
    )
}

export default AbvFilter