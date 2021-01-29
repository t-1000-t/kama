import React, {Component, ComponentType, FC} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";

import UsersContainer from "./components/common/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from 'react-redux';
import {compose} from "redux"
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader"
import store from './redux/redux-store';
import {withSuspense} from "./components/hoc/withSuspense";
import {AppStateType} from "./types/types";

const DialogsContainer = React.lazy(() => import("./components/common/Dialogs/DialogsContainer/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)


class App extends Component<MapPropsType & DispatchPropsType> {

    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert("Some error occured")
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-container">
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>
                        <Route path='dialogs' render={() => <SuspendedDialogs />}/>
                        <Route path='/profile/:userId>' render={() => <SuspendedProfile /> }/>
                        <Route path='/users' render={() => <UsersContainer pageTitle="Рахиты"/>}/>
                        <Route path='/login' render={() => <LoginPage/>}/>
                        <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }


    const
    mapStateToProps = (state: AppStateType) => ({
        initialized: state.app.initialized
    })

    let
    AppContainer = compose<ComponentType>(
        withRouter,
        connect(mapStateToProps, {initializeApp}))(App)

    const
    SamuraiJSApp: FC = () => {
        return <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    }

    export
    default
    SamuraiJSApp;
