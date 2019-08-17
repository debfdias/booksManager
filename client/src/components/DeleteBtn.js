import React from 'react'

function DeleteBtn(props) {
    return (
        <span role="button" className="btn btn-danger text-light btn-sm" tabIndex="0" {...props}>
            Excluir
        </span>
    )
}

export default DeleteBtn;
