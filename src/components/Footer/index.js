import React from 'react'
import Form from './Form'
import Contacts from './Contacts'

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 250,
            min: 250,
            max: 2500,
        }
    }

    onChange = (value) => {
        this.setState({value})
    }

    onChangeMin = (e) => {
        this.setState({
            min: +e.target.value || 100
        })
    }

    onChangeMax = (e) => {
        this.setState({
            max: +e.target.value || 2550
        })
    }

    render() { 
        return(
            <div className="container-fluid">
                <div className="row">
                    <Form 
                        value={this.state.value}
                        onChange={this.onChange}
                        max={this.state.max}
                        min={this.state.min}
                    />
                    <Contacts />
                </div>
            </div>
        )
    }
}

export default Footer;