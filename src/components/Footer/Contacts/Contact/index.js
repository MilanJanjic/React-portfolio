import React from 'react'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = (each) => 
    <div className="contact d-flex pt-3">
        <FontAwesomeIcon icon={each.icon} size="2x" className="icon"/>
        <p className="ml-2">{each.contact}</p>
    </div>

export default Contact;