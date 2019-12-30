import React, {Component} from "react";
import "./App.css";
import firebase from "./firebase.js"
import ImageUpload from "./ImageUpload"

const auth = firebase.auth();

class App extends Component {

    constructor(){
        super();
        this.state ={
          user:null,
          email:null,
          notesList:[],
          userInput: ""
        }
    }

    componentDidMount(){
    //check if user is logged in
    auth.onAuthStateChanged((user) => {
      const email = user.email

      //Email without "." because firebase cannot process periods
      const emailFirebase = email.split(".")[0] + email.split(".")[1]

      if (user) {
        this.setState({ user, email });

        //connect to firebase
        const notesRef = firebase.database().ref().child(emailFirebase).child("notes")
        notesRef.on("value", (snapshot) =>{
            const notes = snapshot.val();

            const newNotes = [];

            //for every object, we create a new object with two key values: note text and note id
            for(let key in notes){

              //Find out the key of each note value in firebase, to figure out how to delete each later
              const singleNote = {
                  noteId: key,
                  noteText: notes[key]
                }

                newNotes.push(singleNote)
            }

            //Update state for notes - taking new array and updating it
              this.setState({
                  notesList:newNotes
              })
          })
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
//Closing dialogs whenever user clicks the "x"
    closeDialog = () => {
      document.getElementById("dialog").removeAttribute("open")
      document.getElementById("dialog").classList.add("visuallyHidden")
    }

//Close welcome dialog 
    closeWelcome = () => {
      document.getElementById("welcome").removeAttribute("open")
      document.getElementById("welcome").classList.add("visuallyHidden")
//Make sure welcome dialog doesn't re-open next time session
      const emailFirebase = this.state.email.split(".")[0]+this.state.email.split(".")[1]
      const welcomeRef = firebase.database().ref().child(emailFirebase).child("welcome")
      welcomeRef.push("closed")
    }

//Switches between two themes available whenever user toggles switch
//Pushes theme chosen to firebase to save preferred theme for later
    toggleTheme = (event) =>{
      //Firebase cannot have "." characters, must split and concat to remove
      const emailFirebase = this.state.email.split(".")[0]+this.state.email.split(".")[1]
      const themeRef = firebase.database().ref().child(emailFirebase).child("theme")
      if(event.target.checked === true){
        document.body.style.background = "#8386de"
        themeRef.push("lavender")
      }else{
        document.body.style.background = "url(./assets/corkBoard.jpg)"
        themeRef.push("cork")
      }
    }

    //Update state everytime user types inside input text bar
    handleChange = (event) =>{
        this.setState({
            userInput: event.target.value
        })
    }

    //Submitting form for creating a new note
    handleSubmit = (event) => {
        event.preventDefault();
        //Put what we submit, the book title, in a constant
        const addNote = this.state.userInput
        //add 'booksToAdd' to firebase (so that the dbRef listener will be called and it willl update state and cause the app to re-render)

        //push to firebase

        //Firebase cannot have "." characters, must split and concat to remove
        const emailFirebase = this.state.email.split(".")[0] + this.state.email.split(".")[1]
        const notesRef = firebase.database().ref().child(emailFirebase).child("notes");

        // Make sure no empty strings are submitted
        if(addNote !== ""){
            notesRef.push(addNote)
            //Make user input an empty string, make sure to update HTML with value attribute
            this.setState({
                userInput: ""
            })
        }else{
          alert("Sorry! Blank notes cannot be submitted.")
        }
  
    }
//Delete written note by user
    deleteNote = (event) => {
      event.preventDefault();

       //Firebase cannot have "." characters, must split and concat to remove
      const emailFirebase = this.state.email.split(".")[0]+this.state.email.split(".")[1]

      const notesRef = firebase.database().ref().child(emailFirebase).child("notes");

      notesRef.child(event.target.id).remove();
    }
//Authentication
//Login button
    login = (e) => {
      e.preventDefault();
      const email = document.getElementById("textEmail").value
      const password = document.getElementById("textPassword").value
  
      auth.signInWithEmailAndPassword(email, password).then((result) => {
        const user = result.user;
        const email = result.user.email
        this.setState({
          user,
          email
        })
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
  //Log out button
    logout  = () => {
      auth.signOut()
        .then(() => {
          this.setState({
            user: null
          });
        });
    }
//Render on page
    render(){
        return(
          <div>
          {this.state.user ?
            <main>
              {/* Toggle switch for two themes */}
              <label className="switch" title="Change theme">
              <span className="visuallyHidden">Click here to change the theme</span>
                <input type="checkbox" onChange={this.toggleTheme} id="toggleTheme" tabIndex="0" className="visuallyHidden"/>
                <span className="slider"></span>
              </label>
              {/* Logout button */}
              <button onClick={this.logout} className="logoutBtn" title="Log out">
                <span className="visuallyHidden">Click here to log out</span>
                ◑
              </button>
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
              <section className="notes wrapper" id="notes">
                {/* Button to open dialog to create a new note */}
                <button type="open" onClick={this.openDialog} title="New note">
                  <span className="visuallyHidden">Click here to write a new note</span>+
                </button>
                {/* Dialog for form for writing and submitting a new note */}
                <dialog id="dialog" className="newNote visuallyHidden">
                  <form>
                    <div className="titleBar">
                      <button type="button" id="closeBtn" onClick={this.closeDialog} title="Close window">X</button>
                      <button type="submit" title="Submit note" onClick={this.handleSubmit}>Add Note +</button>
                    </div>
                    <textarea type="text" id="noteText" rows="7" cols="16" onChange={this.handleChange} value={this.state.userInput}></textarea>
                  </form>
                </dialog>
                {/* Section to map array of notesList in state to display notes written by user */}
                <ul>
                    {this.state.notesList.map((noteValue, i)=>{
                        return(
                            <li key={i}>
                              <div className="titleBar">
                                <button id={noteValue.noteId} className="delete" onClick={this.deleteNote} title="Delete note" tabIndex="0">X</button>
                              </div>
                              <textarea rows="7" cols="16" value={noteValue.noteText} readOnly></textarea>
                            </li>
                        )
                    })}
                </ul>
              </section>
              <ImageUpload/>
            </main>
            :
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
          }
          </div>
        )
    }
  }

export default App;