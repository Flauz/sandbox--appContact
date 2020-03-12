import React, { Component } from 'react'

export default class Contact extends Component {

    state = {
        show: true
    }

    showContact = () => {
        this.setState({
            show: !this.state.show
        })
    }

    supContact = () => {
        this.props.supClick()
    }

    render() {
        return (
            <div className="card card-body mb-3 text-center">
                <h4>{this.props.nom}&nbsp;
                    <i style={{ cursor: 'pointer' }} className="fas fa-sort-down"
                        onClick={this.showContact}>
                    </i>
                    <i className='fas fa-times' style={{cursor: 'pointer', float: 'right', color: 'red'}} onClick={this.supContact}></i>
                </h4>
                {this.state.show ? (
                    <ul className="card card-body mb-3">
                        <li className="list-group-item">
                            email : {this.props.mail}
                        </li>
                        <li className="list-group-item">
                            tel : {this.props.tel}
                        </li>
                    </ul>
                ) : null}


            </div>
        )
    }
}
