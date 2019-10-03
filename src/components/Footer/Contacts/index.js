import React from 'react'
import Contact from './Contact'
import { faLocationArrow, faMobile } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import logo from './logo.png'
import './style.css'

const Contacts = () => 
    <div className="col-sm-6 contacts pl-5">
        <div className="logo">
            <img className="img-fluid" src={logo} alt="" />
        </div>
        <Contact 
            icon={faLocationArrow}
            contact="Franje Tudjmana 20 48260 Krizevci"
        />
        <Contact 
            icon={faMobile}
            contact="095/3888-445"
        />
        <Contact 
            icon={faFacebook}
            contact="facebook.com/carigrad"
        />
        <Contact 
            icon={faInstagram}
            contact="instagram.com/projectcarigrad"
        />
        <Contact 
            icon={faTelegram}
            contact="t.me/carigrad"
        />
        <Contact 
            icon={faTwitter}
            contact="twitter.com/projectcarigrad"
        />
    </div>

export default Contacts;