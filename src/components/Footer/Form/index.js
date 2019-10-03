import React from 'react'
import Button from '../../Button'
import './style.css'
import { withTranslation } from 'react-i18next'
import Budget from '../Budget'

const Form = ({ value, onChange, t, min, max}) => 
    <div className="col-sm-6">
        <form>
            <div className="form-group">
                <small 
                    id="nameHelp" 
                    className="form-text text-muted">{t('small-name')}</small>
                <input 
                    type="text" 
                    className="form-control" 
                    aria-describedby="nameHelp" 
                    placeholder={t('placeholder-name')} />
            </div>
            <div className="form-group">
                <small 
                    id="emailHelp" 
                    className="form-text text-muted">{t('small-email')}</small>
                <input 
                    type="email" 
                    className="form-control" 
                    aria-describedby="emailHelp" 
                    placeholder={t('placeholder-email')} />
            </div>
            <div className="form-group">
                <small 
                    id="serviesHelp" 
                    className="form-text text-muted">{t('small-services')}</small>
                <select className="form-control" id="exampleFormControlSelect1">
                <option>{t('option-services')}</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
            </div>
            <Budget 
                onChange={onChange}
                min={min}
                max={max}
                value={value}
            />
            <div className="form-group">
                <small 
                    id="messageHelp" 
                    className="form-text text-muted">{t('small-message')}</small>
                <textarea 
                    type="text" 
                    className="form-control" 
                    aria-describedby="emailHelp" 
                    placeholder={t('placeholder-message')} />
            </div>
            <div className="form-group">
                <Button 
                    name={t('btn-form')}
                />
            </div>
            </form>
    </div>

export default withTranslation()(Form);