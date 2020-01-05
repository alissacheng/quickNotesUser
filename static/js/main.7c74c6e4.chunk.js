(this["webpackJsonpauthentication-ex"]=this["webpackJsonpauthentication-ex"]||[]).push([[0],{16:function(e,t,a){e.exports=a(27)},21:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(14),i=a.n(o),s=a(15),c=a(5),r=a(6),d=a(8),u=a(7),m=a(9),h=(a(21),a(3)),p=a.n(h);a(22),a(28),a(25);p.a.initializeApp({apiKey:"AIzaSyAQAZ8FYOV6h7iPN4L_rp0SSE0Um1jp704",authDomain:"fir-react-athentication.firebaseapp.com",databaseURL:"https://fir-react-athentication.firebaseio.com",projectId:"fir-react-athentication",storageBucket:"fir-react-athentication.appspot.com",messagingSenderId:"658384457017",appId:"1:658384457017:web:4729276b456f8419956ce8"});var g=p.a.storage(),v=(p.a.auth(),p.a.auth()),f=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(d.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){var a=t.target.files[0];if(e.setState({selectedFile:a}),"image/jpeg"===a.type||"image/jpg"===a.type||"image/png"===a.type||"image/gif"===a.type){var n=e.state.email.split(".")[0]+e.state.email.split(".")[1];p.a.database().ref().child(n).child("photos").push(a.name),g.ref(a.name).put(a).on("state_changed",(function(){p.a.database().ref().child(n).child("photos").on("value",(function(t){var a=t.val(),n=[],l=function(t){g.ref().child(a[t]).getDownloadURL().then((function(l){var o={photoId:t,photoName:a[t],photoUrl:l};n.push(o),e.setState({photosList:n})}))};for(var o in a)l(o)}))}),(function(e){alert("We could not upload your file at this time due to ".concat(e.code,". Please try again later."))}))}else alert("Sorry! The file format you uploaded could not be processed. Only JPG, JPEG, PNG and GIF files are allowed.")},e.deletePhoto=function(t){var a=e.state.email.split(".")[0]+e.state.email.split(".")[1];p.a.database().ref().child(a).child("photos").child(t.target.id).remove();var n=0;e.state.photosList.forEach((function(e){t.target.name===e.photoName&&(n+=1)})),n<2&&g.ref().child(t.target.name).delete()},e.state={photosList:[],selectedFile:null,user:null,email:null},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.onAuthStateChanged((function(t){var a=t.email;if(t){e.setState({user:t,email:a});var n=a.split(".")[0]+a.split(".")[1];p.a.database().ref().child(n).child("photos").on("value",(function(t){var a=t.val(),n=[],l=function(t){g.ref().child(a[t]).getDownloadURL().then((function(l){var o={photoId:t,photoName:a[t],photoUrl:l};n.push(o),e.setState({photosList:n})}))};for(var o in a)l(o)}))}}))}},{key:"render",value:function(){var e=this;return l.a.createElement("section",{className:"photos wrapper",id:"photos"},l.a.createElement("input",{id:"fileUpload",type:"file",className:"customUpload visuallyHidden",tabIndex:"1",onChange:this.handleChange,accept:"image/*"}),l.a.createElement("label",{htmlFor:"fileUpload",className:"customUpload",title:"Upload photo"},l.a.createElement("span",{className:"visuallyHidden"},"Click here to upload an image"),"\u25b2"),l.a.createElement("ul",{className:"gallery"},this.state.photosList.map((function(t,a){return l.a.createElement("li",{key:a},l.a.createElement("div",{className:"titleBar"},l.a.createElement("button",{id:t.photoId,name:t.photoName,className:"delete",onClick:e.deletePhoto,title:"Delete photo",tabIndex:"0"},"X")),l.a.createElement("img",{src:t.photoUrl,alt:t.photoName}))}))))}}]),t}(n.Component),E=p.a.auth(),y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(d.a)(this,Object(u.a)(t).call(this))).openDialog=function(){document.getElementById("dialog").setAttribute("open",!0),document.getElementById("dialog").classList.remove("visuallyHidden")},e.closeDialog=function(){document.getElementById("dialog").removeAttribute("open"),document.getElementById("dialog").classList.add("visuallyHidden"),document.getElementById("edit").removeAttribute("open"),document.getElementById("edit").classList.add("visuallyHidden")},e.closeWelcome=function(){document.getElementById("welcome").removeAttribute("open"),document.getElementById("welcome").classList.add("visuallyHidden");var t=e.state.email.split(".")[0]+e.state.email.split(".")[1];p.a.database().ref().child(t).child("welcome").push("closed")},e.toggleTheme=function(t){var a=e.state.email.split(".")[0]+e.state.email.split(".")[1],n=p.a.database().ref().child(a).child("theme");!0===t.target.checked?(document.body.style.background="#8386de",n.push("lavender")):(document.body.style.background="url(./assets/corkBoard.jpg)",n.push("cork"))},e.handleChange=function(t){e.setState({userInput:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.userInput,n=e.state.email.split(".")[0]+e.state.email.split(".")[1],l=p.a.database().ref().child(n).child("notes");""!==a?(l.push(a),e.setState({userInput:""})):alert("Sorry! Blank notes cannot be submitted.")},e.editNote=function(t){t.preventDefault(),document.getElementById("edit").setAttribute("open",!0),document.getElementById("edit").classList.remove("visuallyHidden"),e.setState({userInput:t.target.value,userId:t.target.id})},e.saveNote=function(t){t.preventDefault();var a=e.state.userInput;if(""!==a){e.setState({userInput:""}),document.getElementById("edit").removeAttribute("open"),document.getElementById("edit").classList.add("visuallyHidden"),p.a.database().ref("notes/"+e.state.userId).set(a);var n=Object(s.a)(e.state.notesList);n.forEach((function(t){t.noteId===e.state.userId&&(t.noteText=a,e.setState({notesList:n,userId:null}))}))}else alert("Sorry! Blank notes cannot be submitted.")},e.deleteNote=function(t){t.preventDefault();var a=e.state.email.split(".")[0]+e.state.email.split(".")[1];p.a.database().ref().child(a).child("notes").child(t.target.id).remove()},e.login=function(t){t.preventDefault();var a=document.getElementById("textEmail").value,n=document.getElementById("textPassword").value;E.signInWithEmailAndPassword(a,n).then((function(t){var a=t.user,n=t.user.email;e.setState({user:a,email:n})})).catch((function(e){var t=e.message;alert(t)}))},e.signUp=function(e){e.preventDefault();var t=document.getElementById("textEmail").value,a=document.getElementById("textPassword").value;E.createUserWithEmailAndPassword(t,a).catch((function(e){var t=e.message;alert(t)}))},e.logout=function(){E.signOut().then((function(){e.setState({user:null})}))},e.state={user:null,email:null,notesList:[],userInput:"",userId:null},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.onAuthStateChanged((function(t){var a=t.email,n=a.split(".")[0]+a.split(".")[1];t&&(e.setState({user:t,email:a}),p.a.database().ref().child(n).child("notes").on("value",(function(t){var a=t.val(),n=[];for(var l in a){var o={noteId:l,noteText:a[l]};n.push(o)}e.setState({notesList:n})})),p.a.database().ref().child(n).child("theme").on("value",(function(e){var t=e.val(),a=0,n=0;for(var l in t)"lavender"===t[l]?a+=1:n+=1,a===n?(document.body.style.background="url(./assets/corkBoard.jpg)",document.getElementById("toggleTheme").checked=!1):(document.body.style.background="#8386de",document.getElementById("toggleTheme").checked=!0)})),p.a.database().ref().child(n).child("welcome").on("value",(function(e){var t=e.val();for(var a in t)"closed"===t[a]&&(document.getElementById("welcome").removeAttribute("open"),document.getElementById("welcome").classList.add("visuallyHidden"))})))}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,this.state.user?l.a.createElement("main",null,l.a.createElement("label",{className:"switch",title:"Change theme"},l.a.createElement("span",{className:"visuallyHidden"},"Click here to change the theme"),l.a.createElement("input",{type:"checkbox",onChange:this.toggleTheme,id:"toggleTheme",tabIndex:"0",className:"visuallyHidden"}),l.a.createElement("span",{className:"slider"})),l.a.createElement("button",{onClick:this.logout,className:"logoutBtn",title:"Log out"},l.a.createElement("span",{className:"visuallyHidden"},"Click here to log out"),"\u25d1"),l.a.createElement("dialog",{id:"welcome",className:"welcome",open:!0},l.a.createElement("div",{className:"titleBar"},l.a.createElement("button",{id:"closeBtn",onClick:this.closeWelcome,title:"Close window"},"X")),l.a.createElement("h1",null,"Welcome to QuickNotes!"),l.a.createElement("p",null,"QuickNotes is an application that allows you to save all your notes and photos in one convenient place."),l.a.createElement("p",null,"Choose a button in the right panel to get started:"),l.a.createElement("ul",null,l.a.createElement("li",null,"- Toggle the switch to change themes"),l.a.createElement("li",null,"- Click the triangle (\u25b2) to upload a photo"),l.a.createElement("li",null,"- Click the plus sign (+) to create a new note"),l.a.createElement("li",null,"- Click the half-filled circle (\u25d1) to log out"),l.a.createElement("li",null,'- Click the "x" to delete an item and close the window'))),l.a.createElement("section",{className:"notes wrapper",id:"notes"},l.a.createElement("button",{type:"open",onClick:this.openDialog,title:"New note"},l.a.createElement("span",{className:"visuallyHidden"},"Click here to write a new note"),"+"),l.a.createElement("dialog",{id:"dialog",className:"newNote visuallyHidden"},l.a.createElement("form",null,l.a.createElement("div",{className:"titleBar"},l.a.createElement("button",{type:"button",id:"closeBtn",onClick:this.closeDialog,title:"Close window"},"X"),l.a.createElement("button",{type:"submit",title:"Submit note",onClick:this.handleSubmit},"Add Note +")),l.a.createElement("textarea",{type:"text",id:"noteText",rows:"7",cols:"16",onChange:this.handleChange,value:this.state.userInput}))),l.a.createElement("dialog",{id:"edit",className:"newNote visuallyHidden"},l.a.createElement("form",null,l.a.createElement("div",{className:"titleBar"},l.a.createElement("button",{type:"button",id:"closeBtn",onClick:this.closeDialog,title:"Close window"},"X"),l.a.createElement("button",{type:"submit",title:"Save note",onClick:this.saveNote},"Save Note +")),l.a.createElement("textarea",{type:"text",id:"noteText",rows:"7",cols:"16",onChange:this.handleChange,value:this.state.userInput}))),l.a.createElement("ul",{className:"notes"},this.state.notesList.map((function(t,a){return l.a.createElement("li",{key:a},l.a.createElement("div",{className:"titleBar"},l.a.createElement("button",{id:t.noteId,value:t.noteText,className:"edit",title:"Edit note",onClick:e.editNote},"\ud83d\udcdd Edit"),l.a.createElement("button",{id:t.noteId,className:"delete",onClick:e.deleteNote,title:"Delete note",tabIndex:"0"},"X")),l.a.createElement("textarea",{rows:"7",cols:"16",value:t.noteText,readOnly:!0}))})))),l.a.createElement(f,null)):l.a.createElement("form",{className:"homePage"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("h1",null,"Welcome to QuickNotes!"),l.a.createElement("p",null,"Log in or create an account if you don't have one already. To create an account, enter an email and password before clicking sign up."),l.a.createElement("label",{htmlFor:"textEmail",className:"visuallyHidden"},"Enter your email:"),l.a.createElement("input",{id:"textEmail",type:"email",placeholder:"Email"}),l.a.createElement("label",{htmlFor:"textPassword",className:"visuallyHidden"},"Enter your password:"),l.a.createElement("input",{id:"textPassword",type:"password",placeholder:"Password"}),l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{onClick:this.login,id:"loginBtn"},"Log In"),l.a.createElement("button",{onClick:this.signUp,id:"signUpBtn"},"Sign Up")),l.a.createElement("p",{className:"aside"},"Click ",l.a.createElement("a",{href:"https://alissacheng.github.io/alissaChengQuickNotes/"},"here")," to test out the app without making an account or click ",l.a.createElement("a",{href:"https://github.com/alissacheng/alissaChengQuickNotes"},"here")," to see the test version on GitHub."))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.7c74c6e4.chunk.js.map