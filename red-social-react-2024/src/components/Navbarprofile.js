import React, {Component, Fragment} from 'react';
import { NavLink, Link, Route, Switch } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

import firebase from '../firebase/firebase';

import HomeWallposts from './Homewallposts';
import Profile from './Profile'
import Account from './Account'

export default class  Navbarprofile extends Component{
    render(){
        return (
            <Fragment>
                
                <nav className="navbar">
                    <Link className="App-logo navbar-brand" to="/">
                        <img className="App-logo-image" src={Logo} alt="logo" />
                    </Link>
                    <div className="navMenu navbar-nav">
                        <NavLink className="nav-item navMenuLink" exact to="/" >Muro</NavLink>
                        <NavLink className="nav-item navMenuLink" to="/Profile" >Perfil</NavLink>
                        <NavLink className="nav-item navMenuLink" to="/Account" >Cuenta</NavLink>
                        <Link className="nav-item navMenuLink"  to="/" 
                            onClick={() => firebase.auth().signOut()} >Cerrar</Link>
                    </div>
                </nav>

                <Switch>
                    <div className="Navigation">
                    <Route exact path="/" component={HomeWallposts} />
                    <Route path="/Profile" component={Profile} />
                    <Route path="/Account" component={Account} />
                    </div>
                </Switch>
        </Fragment>
           
        )
    }
};