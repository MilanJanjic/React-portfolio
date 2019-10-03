import React, { Suspense } from 'react'
import '../i18n'
import Top from './Top'
import Info from './Info'
import Main from './Main'
import Footer from './Footer'

class CarigradServices extends React.Component {
    render() {
        return(
            <div className="container-fixed w-100">
                <Suspense fallback={null}>
                    <Top />
                    <Info />
                    <Main />
                    <Footer />
                </Suspense>
            </div>
        )
    }
}

export default CarigradServices;