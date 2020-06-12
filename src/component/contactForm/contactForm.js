import React from 'react';
import * as _ from 'lodash'
import './contactForm.scss';

const axios = require('axios').default;

const data = [
    { label: 'Name', type: 'input' },
    { label: 'Email', type: 'input' },
    { label: 'Message', type: 'textarea' }
]

class ContactForm extends React.Component {
    state = {
        Name: '',
        Email: '',
        Message: '',
    }

    handleChange = (label) => (e) => {
        this.setState({
            [label]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { Name, Email, Message } = this.state
        axios.post('/api/form', {
            Name,
            Email,
            Message
        })
        this.setState({
            Name: '',
            Email: '',
            Message: ''
        })
    }

    rednerForm = () => {
        return <form className='contactForm__form' onSubmit={this.handleSubmit}>
            {_.map(data, (item, key) => {
                return item.type === 'input'
                    ? <input 
                        required
                        key={key} 
                        type="text" 
                        placeholder={item.label} 
                        value={this.state[item.label]} 
                        onChange={this.handleChange(item.label)} 
                    />
                    : <textarea 
                        key={key} 
                        type="text" 
                        placeholder={item.label} 
                        value={this.state[item.label]} 
                        onChange={this.handleChange(item.label)} 
                    />
            })}
            <button type="submit">SEND</button>
        </form>
    }

    render() {
        return (
            <div className='contactForm'>
                {this.rednerForm()}
            </div>
        )
    }
}

export default ContactForm;
