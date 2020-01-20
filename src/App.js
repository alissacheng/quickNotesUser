import React, {Component} from "react";
import "./App.css";
import firebase from "./firebase.js"
import Welcome from "./Welcome"
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
        } 
      });
    }
    //Open dialog form for creating a new note when user clicks the plus sign
    openDialog = () => {
      document.getElementById("dialog").setAttribute("open", true)
      document.getElementById("dialog").classList.remove("visuallyHidden")
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
              <Welcome
                emailProp={this.state.emailFirebase}
              />
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