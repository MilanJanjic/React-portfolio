import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'
import { withTranslation } from 'react-i18next'

import Button from '../Button'
const Boxes = ({t, text, icon}) => 
    <div className="box">
        <div className="box-icon  d-flex justify-content-center">
            <FontAwesomeIcon 
                icon={icon} 
                size="4x" 
                className="icon"    
            />
        </div>
        <div className="box-text d-flex justify-content-center mt-5">
            { text }
        </div>
        <div className="box-button d-flex justify-content-center mt-5">
            <Button 
                name={t('main-btn')}
            />
        </div>
    </div>
export default withTranslation()(Boxes)