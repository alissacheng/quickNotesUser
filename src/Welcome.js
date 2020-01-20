import React, {Component} from "react";
import "./App.css";
import firebase from "./firebase.js"

class Welcome extends Component{

    componentDidMount(){
        const {emailProp} = this.props
        if(emailProp){
                     //Check if welcome dialog has already been closed before, and keep it closed if so
            const welcomeRef = firebase.database().ref().child(emailProp).child("welcome")

            welcomeRef.on("value", (snapshot)=>{
            const welcome = snapshot.val()

            for(let key in welcome){
                if(welcome[key] === "closed"){
                    document.getElementById("welcome").removeAttribute("open")
                    document.getElementById("welcome").classList.add("visuallyHidden")
                    }
                }
            })
        }
    }

    //Close welcome dialog 
    closeWelcome = () => {
        document.getElementById("welcome").removeAttribute("open")
        document.getElementById("welcome").classList.add("visuallyHidden")
  //Make sure welcome dialog doesn't re-open next time session
        const {emailProp} = this.props
        const welcomeRef = firebase.database().ref().child(emailProp).child("welcome")
        welcomeRef.push("closed")
    }

    render(){
        return(
        <dialog id="welcome" className="welcome" open>
            <div className="titleBar">
                <button id="closeBtn" onClick={this.closeWelcome} title="Close window">X</button>
            </div>
            <h1>Welcome to QuickNotes!</h1>
            <p>QuickNotes is an application that allows you to save all your notes and photos in one convenient place.</p>
            <p>Choose a button in the right panel to get started:</p>
            <ul>
                <li>- Toggle the switch to change themes</li>
                <li>- Click the triangle (▲) to upload a photo</li>
                <li>- Click the plus sign (+) to create a new note</li>
                <li>- Click the half-filled circle (◑) to log out</li>
                <li>- Click the "x" to delete an item and close the window</li>
            </ul>
        </dialog>
        )
    }
}

export default Welcome