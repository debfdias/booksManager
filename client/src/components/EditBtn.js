import React from 'react'

function EditBtn(props) {
    return (
        <span role="button" className="btn btn-secondary text-light disabled btn-sm" tabIndex="1" {...props}>
           Editar
        </span>
    )
}

export default EditBtn
