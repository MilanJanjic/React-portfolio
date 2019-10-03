import React from 'react'
import ReactCountryFlag from "react-country-flag";
import './style.css'

import { withTranslation } from 'react-i18next'


const Top = ({ t, i18n }) => {
    const changeLanguage = ( event ) => {
        i18n.changeLanguage(event.target.value)
        console.log(event.value)
    }
    return(
    <div className="top d-flex">
        <div className="row w-100 px-sm-2 top">
            <div className="col-sm-6 d-flex justify-content-sm-start justify-content-center">
                <p><span className="top-text">{t('top-text')}</span> {t('top-text-span')}</p>
            </div>
            <div className="col-sm-6 p-0  d-flex justify-content-sm-end justify-content-center">
                <button 
                    value="hr" 
                    onClick={changeLanguage} 
                    className="flag
                ">
                    <ReactCountryFlag  code="hr" svg/>
                </button>
                <button value="rs" onClick={changeLanguage} className="flag">
                    <ReactCountryFlag code="rs" svg/>
                </button>
                <button defaultValue="gb" value="gb" onClick={changeLanguage} className="flag">
                    <ReactCountryFlag code="gb" svg/>
                </button>
            </div>
        </div>
    </div>
    )
    //Carigrad Web & Design da se menja u zavisnosti od jezika
}
export default withTranslation()(Top);