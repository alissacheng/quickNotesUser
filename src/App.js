import React, {Component} from "react";
import "./App.css";
import firebase from "./firebase.js"
import TypeNotes from "./TypeNotes"
import ImageUpload from "./ImageUpload"
import Login from "./Login"
import ButtonPanel from "./ButtonPanel"

const auth = firebase.auth();
class App extends Component {

    constructor(){
        super();
        this.state ={
          user:null,
          email:null,
          emailFirebase:null
        }
    }

    componentDidMount(){
    //check if user is logged in
    auth.onAuthStateChanged((user) => {
      const email = user.email

      //Email without "." because firebase cannot process periods
      const emailFirebase = email.split(".")[0] + email.split(".")[1]

      if (user) {
        this.setState({ user, email, emailFirebase });

          //Retrieve theme last saved from firebase database to place on page
          const themeRef = firebase.database().ref().child(emailFirebase).child("theme")

          themeRef.on("value", (snapshot) =>{
            const theme = snapshot.val()

            let lavender = 0
            let cork = 0
            for (let key in theme){
              if(theme[key] === "lavender"){
                lavender += 1;
              }else{
                cork += 1;
              }

              if(lavender === cork){
                document.body.style.background = "url(./assets/corkBoard.jpg)"
                document.getElementById("toggleTheme").checked = false;
              }else{
                document.body.style.background = "#8386de"
                document.getElementById("toggleTheme").checked = true;
              }
            }
          })
          //Check if welcome dialog has already been closed before, and keep it closed if so
          const welcomeRef = firebase.database().ref().child(emailFirebase).child("welcome")

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
      });
    }
    //Open dialog form for creating a new note when user clicks the plus sign
    openDialog = () => {
      document.getElementById("dialog").setAttribute("open", true)
      document.getElementById("dialog").classList.remove("visuallyHidden")
    }
//Close welcome dialog 
    closeWelcome = () => {
      document.getElementById("welcome").removeAttribute("open")
      document.getElementById("welcome").classList.add("visuallyHidden")
//Make sure welcome dialog doesn't re-open next time session
      const welcomeRef = firebase.database().ref().child(this.state.emailFirebase).child("welcome")
      welcomeRef.push("closed")
    }

//Switches between two themes available whenever user toggles switch
//Pushes theme chosen to firebase to save preferred theme for later
    toggleTheme = (event) =>{
      //Firebase cannot have "." characters, must split and concat to remove
      const themeRef = firebase.database().ref().child(this.state.emailFirebase).child("theme")
      if(event.target.checked === true){
        document.body.style.background = "#8386de"
        themeRef.push("lavender")
      }else{
        document.body.style.background = "url(./assets/corkBoard.jpg)"
        themeRef.push("cork")
      }
    }

//Set state of user and email after logging in
    setUser = (user, email) =>{
      this.setState({
        user,
        email
      })
    }
  //Log out button
    logout  = () => {
      auth.signOut()
        .then(() => {
          this.setState({
            user: null,
            email: null
          });
        });
    }
//Render on page
    render(){
        return(
          <div>
          {this.state.user ?
            <main>
              <ButtonPanel
                logoutProp={this.logout}
                toggleThemeProp={this.toggleTheme}
                openDialogProp={this.openDialog}
              />
              {/* Welcome message and instructions dialog */}
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
              {/* Section for displaying notes */}
              <TypeNotes
                emailProp={this.state.emailFirebase}
              />
              <ImageUpload
                emailProp={this.state.emailFirebase}
              />
            </main>
            :
            <Login 
              setUserProp={this.setUser}
            />
          }
          </div>
        )
    }
  }

export default App;