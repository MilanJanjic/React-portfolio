import React from 'react'
import { faPenAlt, faServer } from '@fortawesome/free-solid-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import './style.css'
import { withTranslation } from 'react-i18next'

import Boxes from '../Boxes'

class Main extends React.Component {
    render() {
        const { t } = this.props
        return (
            <div className="container-fluid main">
                <div className="row d-flex mb-5">
                    <hr className="circle" /><hr className="hr"/><hr className="circle" />
                </div>
                <div className="row mt-5">
                    <div className="col-sm-4 mb-3">
                        <Boxes 
                            icon={faPenAlt}
                            text={t('box1-text')}
                        />
                    </div>
                    <div className="col-sm-4 mb-3">
                        <Boxes 
                            icon={faEthereum}
                            text={t('box2-text')}
                        />
                    </div>
                    <div className="col-sm-4 mb-3">
                        <Boxes 
                            icon={faServer}
                            text={t('box3-text')}
                        />
                    </div>
                </div>
                <div className="row d-flex mt-5">
                    <hr className="circle" /><hr className="hr"/><hr className="circle" />
                </div>
            </div>
            
        )
    }
}

export default withTranslation()(Main);
