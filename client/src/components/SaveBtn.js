import React, { Component } from 'react';

class SaveBtn extends Component {
    state = {
        saved: false
    }

    handleBtn = () => {
        this.props.savebook(this.props.book)
        this.setState({ saved: true })
    }
    render() {
        
        return (
            <span>
                {this.state.saved ? (
                    <span role="button" className="btn btn-secondary text-light disabled btn-sm">Adicionado</span>
                ) : (
                    <span role="button" {...this.props} className="btn btn-primary text-light btm-sm" onClick={()=> this.handleBtn()}>Adicionar</span>
                    )}
            </span>
        )
    }
}

export default SaveBtn;
