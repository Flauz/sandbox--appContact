import React, { Component } from 'react'
import Contact from './Contact'

export default class Liste extends Component {
    state= {
        contacts : [
            {   
                id: 1,
                nom: 'John Doe',
                mail: 'john@gmail.com',
                tel: '555-555'
            },
            {
                id: 2,
                nom: 'Jane Doe',
                mail: 'john@gmail.com',
                tel: '555-555'
            },
            {
                id: 3,
                nom: 'Hugo Doe',
                mail: 'john@gmail.com',
                tel: '555-555'
            }
        ]
    }

    sup = (id) =>  {
        const newContacts = this.state.contacts.filter(contact =>
            contact.id !== id)

            this.setState({
                contacts: newContacts
            })
    }

    render() {
        return (
            <div>
                {this.state.contacts.map(contact =>(
                    <Contact 
                    key={contact.id}
                    nom={contact.nom}
                    mail={contact.mail}
                    tel={contact.tel}
                    supClick={()=> this.sup(contact.id)}
                    />
                ))}
            </div>
        )
    }
}
