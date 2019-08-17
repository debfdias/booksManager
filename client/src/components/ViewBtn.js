import React from 'react'

function ViewBtn(props) {
    return (
        <span>
            <a className="btn btn-primary btn-sm text-light" href={props.bookLink} target="_blank" rel="noopener noreferrer">Ver Reviews</a>
        </span>
    )
}

export default ViewBtn
