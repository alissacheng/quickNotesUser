(this["webpackJsonpauthentication-ex"]=this["webpackJsonpauthentication-ex"]||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(14),i=a.n(o),s=a(5),c=a(6),r=a(8),d=a(7),u=a(9),m=(a(20),a(3)),h=a.n(m);a(21),a(27),a(24);h.a.initializeApp({apiKey:"AIzaSyAQAZ8FYOV6h7iPN4L_rp0SSE0Um1jp704",authDomain:"fir-react-athentication.firebaseapp.com",databaseURL:"https://fir-react-athentication.firebaseio.com",projectId:"fir-react-athentication",storageBucket:"fir-react-athentication.appspot.com",messagingSenderId:"658384457017",appId:"1:658384457017:web:4729276b456f8419956ce8"});var p=h.a.storage(),g=(h.a.auth(),h.a.auth()),v=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(r.a)(this,Object(d.a)(t).call(this))).handleChange=function(t){var a=t.target.files[0];if(e.setState({selectedFile:a}),"image/jpeg"===a.type||"image/jpg"===a.type||"image/png"===a.type||"image/gif"===a.type){var l=e.state.email.split(".")[0]+e.state.email.split(".")[1];h.a.database().ref().child(l).child("photos").push(a.name),p.ref(a.name).put(a).on("state_changed",(function(){h.a.database().ref().child(l).child("photos").on("value",(function(t){var a=t.val(),l=[],n=function(t){p.ref().child(a[t]).getDownloadURL().then((function(n){var o={photoId:t,photoName:a[t],photoUrl:n};l.push(o),e.setState({photosList:l})}))};for(var o in a)n(o)}))}),(function(e){alert("We could not upload your file at this time due to ".concat(e.code,". Please try again later."))}))}else alert("Sorry! The file format you uploaded could not be processed. Only JPG, JPEG, PNG and GIF files are allowed.")},e.deletePhoto=function(t){var a=e.state.email.split(".")[0]+e.state.email.split(".")[1];h.a.database().ref().child(a).child("photos").child(t.target.id).remove();var l=0;e.state.photosList.forEach((function(e){t.target.name===e.photoName&&(l+=1)})),l<2&&p.ref().child(t.target.name).delete()},e.state={photosList:[],selectedFile:null,user:null,email:null},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.onAuthStateChanged((function(t){var a=t.email;if(t){e.setState({user:t,email:a});var l=a.split(".")[0]+a.split(".")[1];h.a.database().ref().child(l).child("photos").on("value",(function(t){var a=t.val(),l=[],n=function(t){p.ref().child(a[t]).getDownloadURL().then((function(n){var o={photoId:t,photoName:a[t],photoUrl:n};l.push(o),e.setState({photosList:l})}))};for(var o in a)n(o)}))}}))}},{key:"render",value:function(){var e=this;return n.a.createElement("section",{className:"photos wrapper",id:"photos"},n.a.createElement("input",{id:"fileUpload",type:"file",className:"customUpload visuallyHidden",tabIndex:"1",onChange:this.handleChange,accept:"image/*"}),n.a.createElement("label",{htmlFor:"fileUpload",className:"customUpload",title:"Upload photo"},n.a.createElement("span",{className:"visuallyHidden"},"Click here to upload an image"),"\u25b2"),n.a.createElement("ul",{className:"gallery"},this.state.photosList.map((function(t,a){return n.a.createElement("li",{key:a},n.a.createElement("div",{className:"titleBar"},n.a.createElement("button",{id:t.photoId,name:t.photoName,className:"delete",onClick:e.deletePhoto,title:"Delete photo",tabIndex:"0"},"X")),n.a.createElement("img",{src:t.photoUrl,alt:t.photoName}))}))))}}]),t}(l.Component),f=h.a.auth(),E=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(r.a)(this,Object(d.a)(t).call(this))).openDialog=function(){document.getElementById("dialog").setAttribute("open",!0),document.getElementById("dialog").classList.remove("visuallyHidden")},e.closeDialog=function(){document.getElementById("dialog").removeAttribute("open"),document.getElementById("dialog").classList.add("visuallyHidden")},e.closeWelcome=function(){document.getElementById("welcome").removeAttribute("open"),document.getElementById("welcome").classList.add("visuallyHidden");var t=e.state.email.split(".")[0]+e.state.email.split(".")[1];h.a.database().ref().child(t).child("welcome").push("closed")},e.toggleTheme=function(t){var a=e.state.email.split(".")[0]+e.state.email.split(".")[1],l=h.a.database().ref().child(a).child("theme");!0===t.target.checked?(document.body.style.background="#8386de",l.push("lavender")):(document.body.style.background="url(./assets/corkBoard.jpg)",l.push("cork"))},e.handleChange=function(t){e.setState({userInput:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.userInput,l=e.state.email.split(".")[0]+e.state.email.split(".")[1],n=h.a.database().ref().child(l).child("notes");""!==a?(n.push(a),e.setState({userInput:""})):alert("Sorry! Blank notes cannot be submitted.")},e.deleteNote=function(t){t.preventDefault();var a=e.state.email.split(".")[0]+e.state.email.split(".")[1];h.a.database().ref().child(a).child("notes").child(t.target.id).remove()},e.login=function(t){t.preventDefault();var a=document.getElementById("textEmail").value,l=document.getElementById("textPassword").value;f.signInWithEmailAndPassword(a,l).then((function(t){var a=t.user,l=t.user.email;e.setState({user:a,email:l})})).catch((function(e){var t=e.message;alert(t)}))},e.signUp=function(e){e.preventDefault();var t=document.getElementById("textEmail").value,a=document.getElementById("textPassword").value;f.createUserWithEmailAndPassword(t,a).catch((function(e){var t=e.message;alert(t)}))},e.logout=function(){f.signOut().then((function(){e.setState({user:null})}))},e.state={user:null,email:null,notesList:[],userInput:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.onAuthStateChanged((function(t){var a=t.email,l=a.split(".")[0]+a.split(".")[1];t&&(e.setState({user:t,email:a}),h.a.database().ref().child(l).child("notes").on("value",(function(t){var a=t.val(),l=[];for(var n in a){var o={noteId:n,noteText:a[n]};l.push(o)}e.setState({notesList:l})})),h.a.database().ref().child(l).child("theme").on("value",(function(e){var t=e.val(),a=0,l=0;for(var n in t)"lavender"===t[n]?a+=1:l+=1,a===l?(document.body.style.background="url(./assets/corkBoard.jpg)",document.getElementById("toggleTheme").checked=!1):(document.body.style.background="#8386de",document.getElementById("toggleTheme").checked=!0)})),h.a.database().ref().child(l).child("welcome").on("value",(function(e){var t=e.val();for(var a in t)"closed"===t[a]&&(document.getElementById("welcome").removeAttribute("open"),document.getElementById("welcome").classList.add("visuallyHidden"))})))}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,this.state.user?n.a.createElement("main",null,n.a.createElement("label",{className:"switch",title:"Change theme"},n.a.createElement("span",{className:"visuallyHidden"},"Click here to change the theme"),n.a.createElement("input",{type:"checkbox",onChange:this.toggleTheme,id:"toggleTheme",tabIndex:"0",className:"visuallyHidden"}),n.a.createElement("span",{className:"slider"})),n.a.createElement("button",{onClick:this.logout,className:"logoutBtn",title:"Log out"},n.a.createElement("span",{className:"visuallyHidden"},"Click here to log out"),"\u25d1"),n.a.createElement("dialog",{id:"welcome",className:"welcome",open:!0},n.a.createElement("div",{className:"titleBar"},n.a.createElement("button",{id:"closeBtn",onClick:this.closeWelcome,title:"Close window"},"X")),n.a.createElement("h1",null,"Welcome to QuickNotes!"),n.a.createElement("p",null,"QuickNotes is an application that allows you to save all your notes and photos in one convenient place."),n.a.createElement("p",null,"Choose a button in the right panel to get started:"),n.a.createElement("ul",null,n.a.createElement("li",null,"- Toggle the switch to change themes"),n.a.createElement("li",null,"- Click the triangle (\u25b2) to upload a photo"),n.a.createElement("li",null,"- Click the plus sign (+) to create a new note"),n.a.createElement("li",null,"- Click the half-filled circle (\u25d1) to log out"),n.a.createElement("li",null,'- Click the "x" to delete an item and close the window'))),n.a.createElement("section",{className:"notes wrapper",id:"notes"},n.a.createElement("button",{type:"open",onClick:this.openDialog,title:"New note"},n.a.createElement("span",{className:"visuallyHidden"},"Click here to write a new note"),"+"),n.a.createElement("dialog",{id:"dialog",className:"newNote visuallyHidden"},n.a.createElement("form",null,n.a.createElement("div",{className:"titleBar"},n.a.createElement("button",{type:"button",id:"closeBtn",onClick:this.closeDialog,title:"Close window"},"X"),n.a.createElement("button",{type:"submit",title:"Submit note",onClick:this.handleSubmit},"Add Note +")),n.a.createElement("textarea",{type:"text",id:"noteText",rows:"7",cols:"16",onChange:this.handleChange,value:this.state.userInput}))),n.a.createElement("ul",null,this.state.notesList.map((function(t,a){return n.a.createElement("li",{key:a},n.a.createElement("div",{className:"titleBar"},n.a.createElement("button",{id:t.noteId,className:"delete",onClick:e.deleteNote,title:"Delete note",tabIndex:"0"},"X")),n.a.createElement("textarea",{rows:"7",cols:"16",value:t.noteText,readOnly:!0}))})))),n.a.createElement(v,null)):n.a.createElement("form",{className:"homePage"},n.a.createElement("div",{className:"wrapper"},n.a.createElement("h1",null,"Welcome to QuickNotes!"),n.a.createElement("p",null,"Log in or create an account if you don't have one already. To create an account, enter an email and password before clicking sign up."),n.a.createElement("label",{htmlFor:"textEmail",className:"visuallyHidden"},"Enter your email:"),n.a.createElement("input",{id:"textEmail",type:"email",placeholder:"Email"}),n.a.createElement("label",{htmlFor:"textPassword",className:"visuallyHidden"},"Enter your password:"),n.a.createElement("input",{id:"textPassword",type:"password",placeholder:"Password"}),n.a.createElement("div",{className:"buttons"},n.a.createElement("button",{onClick:this.login,id:"loginBtn"},"Log In"),n.a.createElement("button",{onClick:this.signUp,id:"signUpBtn"},"Sign Up")),n.a.createElement("p",{className:"aside"},"Click ",n.a.createElement("a",{href:"https://alissacheng.github.io/alissaChengQuickNotes/"},"here")," to test out the app without making an account or click ",n.a.createElement("a",{href:"https://github.com/alissacheng/alissaChengQuickNotes"},"here")," to see the test version on GitHub."))))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.dde31130.chunk.js.map