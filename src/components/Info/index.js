import React from 'react'
import './style.css'
import { withTranslation } from 'react-i18next'
import Slider from './Slider'

class Info extends React.Component {
    render() {
        const {t} = this.props
        return (
            <div className="info">
                <div className="row d-flex p-0 mx-0">
                    <div className="col-lg-6 px-md-5">
                        <div className="info-box px-md-5">
                            <h3>
                                {t('info-heading')}
                            </h3>
                            <p className="d-flex">
                                {t('info-text')}
                            </p>
                            <button
                                className="btn btn-top mt-3 mb-3"
                            >
                                {t('info-btn')}
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 px-md-5 mx-0 d-flex justify-content-sm-center justify-content-center">
                        <div className="slider-box">
                            <Slider />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation()(Info);