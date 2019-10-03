import React from 'react'
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider'
import { withTranslation } from 'react-i18next'
import './style.css'


const labelStyle = { minWidth: '60px', display: 'inline-block' };
const railStyle = {
    backgroundColor: 'white', 
    borderBottom: '2px solid gray', 
    height: 10,
    borderRadius: 0,
}
const trackStyle = {
    backgroundColor: 'rgb(60, 0, 138)',
    height: 10,
    borderRadius: 0,
}

const handleStyle = {
    borderRadius: 0,
    borderColor: 'gray',
    margin: 0,
    padding: 0,
    height: 10,
    width: 20,
    backgroundColor: 'gray'
}

const Budget = ({ value, onChange, max, min, t }) => 
    <div className="form-group">
        <small 
            id="messageHelp" 
            className="form-text text-muted">{t('small-budget')}</small>
        <label style={labelStyle}>Budget: </label><span>{value} HRK</span>
        <Slider 
            value={value} 
            min={min} 
            max={max} 
            onChange={onChange} 
            step={1} 
            railStyle={railStyle}
            trackStyle={trackStyle}
            handleStyle={handleStyle}
        />
        <div className="d-flex mt-2">
            <span className="mr-5">250 HRK</span>
            <span className="margin-1200">1200 HRK</span>
            <span className="margin-2500">2500 HRK</span>
        </div>
    </div>

export default withTranslation()(Budget);