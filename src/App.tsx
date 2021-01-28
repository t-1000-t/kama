import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/redux-store';

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))


class App extends Component {

  catchAllUnhandledErrors = (reason, promise) => {
    alert("Some error occured")
  }

  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  }
 
  componentWillUnmount() {}

  render() {
  return (
    <div>
      <div>
<Switch>
  <Route exact path='/' 
  render ={() => <Redirect to={"/profile"}/>}/>
  <Route path='dialogs' render={widthSuspense(DialogsContainer)}/>
  <Route path='/profile/:userId>' render={widthSuspense(ProfileContainer)}/>
  <Route path='/users' render={() => <UsersContainer pageTitle="Рахиты"/>}/>
  <Route path='/login' render={() => <LoginPage/>}/>
  <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
</Switch>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App)

  const SamuraiJSApp = (props) => {
    return <BrowserRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
    </BrowserRouter>
  }

export default SamuraiJSApp;
