(this["webpackJsonpauthentication-ex"]=this["webpackJsonpauthentication-ex"]||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(14),i=a.n(o),s=a(5),c=a(6),r=a(8),d=a(7),u=a(9),m=(a(20),a(3)),h=a.n(m);a(21),a(27),a(24);h.a.initializeApp({apiKey:"AIzaSyAQAZ8FYOV6h7iPN4L_rp0SSE0Um1jp704",authDomain:"fir-react-athentication.firebaseapp.com",databaseURL:"https://fir-react-athentication.firebaseio.com",projectId:"fir-react-athentication",storageBucket:"fir-react-athentication.appspot.com",messagingSenderId:"658384457017",appId:"1:658384457017:web:4729276b456f8419956ce8"});var p=h.a.storage(),g=(h.a.auth(),h.a.auth()),v=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(r.a)(this,Object(d.a)(t).call(this))).handleChange=function(t){var a=t.target.files[0];if(e.setState({selectedFile:a}),"image/jpeg"===a.type||"image/jpg"===a.type||"image/png"===a.type||"image/gif"===a.type){var n=e.state.email.split(".")[0]+e.state.email.split(".")[1];h.a.database().ref().child(n).child("photos").push(a.name),p.ref(a.name).put(a).on("state_changed",(function(){h.a.database().ref().child(n).child("photos").on("value",(function(t){var a=t.val(),n=[],l=function(t){p.ref().child(a[t]).getDownloadURL().then((function(l){var o={photoId:t,photoName:a[t],photoUrl:l};n.push(o),e.setState({photosList:n})}))};for(var o in a)l(o)}))}),(function(e){alert("We could not upload your file at this time due to ".concat(e.code,". Please try again later."))}))}else alert("Sorry! The file format you uploaded could not be processed. Only JPG, JPEG, PNG and GIF files are allowed.")},e.deletePhoto=function(t){var a=e.state.email.split(".")[0]+e.state.email.split(".")[1];h.a.database().ref().child(a).child("photos").child(t.target.id).remove();var n=0;e.state.photosList.forEach((function(e){t.target.name===e.photoName&&(n+=1)})),n<2&&p.ref().child(t.target.name).delete()},e.state={photosList:[],selectedFile:null,user:null,email:null},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.onAuthStateChanged((function(t){var a=t.email;if(t){e.setState({user:t,email:a});var n=a.split(".")[0]+a.split(".")[1];h.a.database().ref().child(n).child("photos").on("value",(function(t){var a=t.val(),n=[],l=function(t){p.ref().child(a[t]).getDownloadURL().then((function(l){var o={photoId:t,photoName:a[t],photoUrl:l};n.push(o),e.setState({photosList:n})}))};for(var o in a)l(o)}))}}))}},{key:"render",value:function(){var e=this;return l.a.createElement("section",{className:"photos wrapper",id:"photos"},l.a.createElement("input",{id:"fileUpload",type:"file",className:"customUpload visuallyHidden",tabIndex:"1",onChange:this.handleChange,accept:"image/*"}),l.a.createElement("label",{htmlFor:"fileUpload",className:"customUpload",title:"Upload photo"},l.a.createElement("span",{className:"visuallyHidden"},"Click here to upload an image"),"\u25b2"),l.a.createElement("ul",{className:"gallery"},this.state.photosList.map((function(t,a){return l.a.createElement("li",{key:a},l.a.createElement("div",{className:"titleBar"},l.a.createElement("button",{id:t.photoId,name:t.photoName,className:"delete",onClick:e.deletePhoto,title:"Delete photo",tabIndex:"0"},"X")),l.a.createElement("img",{src:t.photoUrl,alt:t.photoName}))}))))}}]),t}(n.Component),f=h.a.auth(),E=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(r.a)(this,Object(d.a)(t).call(this))).openDialog=function(){document.getElementById("dialog").setAttribute("open",!0),document.getElementById("dialog").classList.remove("visuallyHidden")},e.closeDialog=function(){document.getElementById("dialog").removeAttribute("open"),document.getElementById("dialog").classList.add("visuallyHidden"),document.getElementById("welcome").removeAttribute("open"),document.getElementById("welcome").classList.add("visuallyHidden")},e.toggleTheme=function(t){var a=e.state.email.split(".")[0]+e.state.email.split(".")[1],n=h.a.database().ref().child(a).child("theme");!0===t.target.checked?(document.body.style.background="#8386de",n.push("lavender")):(document.body.style.background="url(./assets/corkBoard.jpg)",n.push("cork"))},e.handleChange=function(t){e.setState({userInput:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.userInput,n=e.state.email.split(".")[0]+e.state.email.split(".")[1],l=h.a.database().ref().child(n).child("notes");""!==a?(l.push(a),e.setState({userInput:""})):alert("Sorry! Blank notes cannot be submitted.")},e.deleteNote=function(t){t.preventDefault();var a=e.state.email.split(".")[0]+e.state.email.split(".")[1];h.a.database().ref().child(a).child("notes").child(t.target.id).remove()},e.login=function(t){t.preventDefault();var a=document.getElementById("textEmail").value,n=document.getElementById("textPassword").value;f.signInWithEmailAndPassword(a,n).then((function(t){var a=t.user,n=t.user.email;e.setState({user:a,email:n})})).catch((function(e){var t=e.message;alert(t+"Try logging in again later or create a new account.")}))},e.signUp=function(e){e.preventDefault();var t=document.getElementById("textEmail").value,a=document.getElementById("textPassword").value;f.createUserWithEmailAndPassword(t,a).catch((function(e){var t=e.message;alert(t+"Try again later.")}))},e.logout=function(){f.signOut().then((function(){e.setState({user:null})}))},e.state={user:null,email:null,notesList:[],userInput:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.onAuthStateChanged((function(t){var a=t.email,n=a.split(".")[0]+a.split(".")[1];t&&(e.setState({user:t,email:a}),h.a.database().ref().child(n).child("notes").on("value",(function(t){var a=t.val(),n=[];for(var l in a){var o={noteId:l,noteText:a[l]};n.push(o)}e.setState({notesList:n})})),h.a.database().ref().child(n).child("theme").on("value",(function(e){var t=e.val(),a=0,n=0;for(var l in t)"lavender"===t[l]?a+=1:n+=1,a===n?(document.body.style.background="url(./assets/corkBoard.jpg)",document.getElementById("toggleTheme").checked=!1):(document.body.style.background="#8386de",document.getElementById("toggleTheme").checked=!0)})))}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,this.state.user?l.a.createElement("main",null,l.a.createElement("button",{onClick:this.logout,className:"logoutBtn"},"Log Out"),l.a.createElement("label",{className:"switch",title:"Change theme"},l.a.createElement("span",{className:"visuallyHidden"},"Click here to change the theme"),l.a.createElement("input",{type:"checkbox",onChange:this.toggleTheme,id:"toggleTheme",tabIndex:"0",className:"visuallyHidden"}),l.a.createElement("span",{className:"slider"})),l.a.createElement("dialog",{id:"welcome",className:"welcome",open:!0},l.a.createElement("div",{className:"titleBar"},l.a.createElement("button",{id:"closeBtn",onClick:this.closeDialog,title:"Close window"},"X")),l.a.createElement("h1",null,"Welcome to QuickNotes!"),l.a.createElement("p",null,"QuickNotes is an application that allows you to save all your notes and photos in one convenient place."),l.a.createElement("p",null,"Choose one of the three buttons in the top right panel to get started:"),l.a.createElement("ul",null,l.a.createElement("li",null,"- Toggle the switch to change themes"),l.a.createElement("li",null,"- Click the triangle (\u25b2) to upload a photo"),l.a.createElement("li",null,"- Click the plus sign (+) to create a new note"),l.a.createElement("li",null,'- Click the "x" to delete an item and close the window')),l.a.createElement("p",null,"Happy posting!")),l.a.createElement("section",{className:"notes wrapper",id:"notes"},l.a.createElement("button",{type:"open",onClick:this.openDialog,title:"New note"},l.a.createElement("span",{className:"visuallyHidden"},"Click here to write a new note"),"+"),l.a.createElement("dialog",{id:"dialog",className:"newNote visuallyHidden"},l.a.createElement("form",null,l.a.createElement("div",{className:"titleBar"},l.a.createElement("button",{type:"button",id:"closeBtn",onClick:this.closeDialog,title:"Close window"},"X"),l.a.createElement("button",{type:"submit",title:"Submit note",onClick:this.handleSubmit},"Add Note +")),l.a.createElement("textarea",{type:"text",id:"noteText",rows:"7",cols:"16",onChange:this.handleChange,value:this.state.userInput}))),l.a.createElement("ul",null,this.state.notesList.map((function(t,a){return l.a.createElement("li",{key:a},l.a.createElement("div",{className:"titleBar"},l.a.createElement("button",{id:t.noteId,className:"delete",onClick:e.deleteNote,title:"Delete note",tabIndex:"0"},"X")),l.a.createElement("textarea",{rows:"7",cols:"16",value:t.noteText,readOnly:!0}))})))),l.a.createElement(v,null)):l.a.createElement("form",{className:"homePage"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("h1",null,"Welcome to QuickNotes!"),l.a.createElement("p",null,"Log in to your account, or create an account if you don't have one already. To create an account, just enter an email and password and click sign up!"),l.a.createElement("label",{htmlFor:"textEmail",className:"visuallyHidden"},"Enter your email:"),l.a.createElement("input",{id:"textEmail",type:"email",placeholder:"Email"}),l.a.createElement("label",{htmlFor:"textPassword",className:"visuallyHidden"},"Enter your password:"),l.a.createElement("input",{id:"textPassword",type:"password",placeholder:"Password"}),l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{onClick:this.login,id:"loginBtn"},"Log In"),l.a.createElement("button",{onClick:this.signUp,id:"signUpBtn"},"Sign Up")))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.9238a507.chunk.js.map