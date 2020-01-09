import React, {Component} from "react";
import firebase from "./firebase.js"
const auth = firebase.auth();

class Login extends Component {
//Login button
    login = (e) => {
        e.preventDefault();
        const email = document.getElementById("textEmail").value
        const password = document.getElementById("textPassword").value

        auth.signInWithEmailAndPassword(email, password).then((result) => {
        const user = result.user;
        const email = result.user.email

        this.props.setUserProp(user, email)

        }).catch(function(error) {
        // Handle Errors here.
        var errorMessage = error.message;
        alert(errorMessage)
        });
    }
    //Sign up button
    signUp = (e) => {
        e.preventDefault();
        //Check for real email
        const email = document.getElementById("textEmail").value
        const password = document.getElementById("textPassword").value
        auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorMessage = error.message;
        alert(errorMessage)
        });
    }
    render() {
        return(
        <form className="homePage">
            <div className="wrapper">
                <h1>Welcome to QuickNotes!</h1>
                <p>Log in or create an account if you don't have one already. To create an account, enter an email and password before clicking sign up.</p>
                <label htmlFor="textEmail" className="visuallyHidden">Enter your email:</label>
                <input id="textEmail" type="email" placeholder="Email"></input>
                <label htmlFor="textPassword" className="visuallyHidden">Enter your password:</label>
                <input id="textPassword" type="password" placeholder="Password"></input>
                <div className="buttons">
                    <button onClick={this.login} id="loginBtn">Log In</button>
                    <button onClick={this.signUp} id="signUpBtn">Sign Up</button>
                </div>
                <p className="aside">Click <a href="https://alissacheng.github.io/alissaChengQuickNotes/">here</a> to test out the app without making an account or click <a href="https://github.com/alissacheng/alissaChengQuickNotes">here</a> to see the test version on GitHub.</p>
            </div>
        </form>
        )
    }
}

export default Login