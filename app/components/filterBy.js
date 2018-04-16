import React from 'react'

const FilterBy = (props) => {
    const onChange = props.onChange ? props.onChange : (ev)=>{
        console.log(ev.target.value)
    }
    return (
        <div>
            <div>Filter By</div>
            <select onChange={onChange}>
                <option></option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
            </select>
        </div>
        )
}

export default FilterBy;