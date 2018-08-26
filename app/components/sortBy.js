import React from 'react'

const SortBy = (props) => {
    const onChange = props.onChange ? props.onChange : (ev)=>{
        console.log(ev.target.value)
    }
    return (
        <div>
            <div>Sort By</div>
            <select onChange = {onChange}>
                <option>Popularity up</option>
                <option>Popularity down</option>
                <option>Rating up</option>
                <option>Rating down</option>
            </select>
        </div>
    )
}

export default SortBy;