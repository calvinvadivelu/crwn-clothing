import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';


import { connect } from 'react-redux';
import './App.css';

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount(){

    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      }
      else {
        setCurrentUser(userAuth);
        console.log('when the user is logging out, or no userAuth', userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={Shoppage}/>
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
