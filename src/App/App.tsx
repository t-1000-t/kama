import React, {FC} from "react"
import styled from './App.module.css'
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Main from "../components/Main/Main";

const App: FC = () => {
    return (
        <div className={styled.wrapperA}>
            <div className={styled.wrapperHT}>
                <Header/>
                <Main/>
            </div>
            <Footer/>
        </div>
    )
}

export default App;