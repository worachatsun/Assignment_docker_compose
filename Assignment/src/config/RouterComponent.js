import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'
import { checkUser } from '../actions'
import EditPreferencesComponent from '../components/EditPreferencesComponent'
import SigninPage from '../components/Authentication/SigninPage'
import SignupPage from '../components/Authentication/SignupPage'

class RouterComponent extends Component {
    componentWillMount = () => {
        if(localStorage.getItem('key')){
            this.props.checkUser()
        } 
    }

    PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={props => (
            this.props.isLoggedIn ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{
                    pathname: '/auth/signin',
                    state: { from: props.location }
                }}/>
            )
        )}/>
    )

    AuthRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={props => (
            !this.props.isLoggedIn ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{
                    pathname: '/',
                    state: { from: props.location }
                }}/>
            )
        )}/>
    )

    render() {
        const { PrivateRoute, AuthRoute } = this

        return (
            <Router>
                <Switch>
                    <PrivateRoute exact path={'/'} component={EditPreferencesComponent}/>
                    <AuthRoute path={'/auth/signin'} component={SigninPage}/>
                    <AuthRoute path={'/auth/signup'} component={SignupPage}/>
                </Switch>
            </Router>
        )
    }
}

const mapStateToProps = state => {
    return { isLoggedIn: state.auth.get('isLoggedIn') }
}

export default connect(mapStateToProps, { checkUser })(RouterComponent)