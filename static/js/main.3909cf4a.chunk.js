(this["webpackJsonpauthentication-ex"]=this["webpackJsonpauthentication-ex"]||[]).push([[0],{17:function(e,t,a){e.exports=a(27)},27:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(15),i=a.n(o),s=a(2),r=a(3),c=a(5),u=a(4),d=a(6),m=(a(9),a(8)),h=a.n(m);a(22),a(28),a(25);h.a.initializeApp({apiKey:"AIzaSyAQAZ8FYOV6h7iPN4L_rp0SSE0Um1jp704",authDomain:"fir-react-athentication.firebaseapp.com",databaseURL:"https://fir-react-athentication.firebaseio.com",projectId:"fir-react-athentication",storageBucket:"fir-react-athentication.appspot.com",messagingSenderId:"658384457017",appId:"1:658384457017:web:4729276b456f8419956ce8"});var p=h.a.storage(),g=(h.a.auth(),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).closeWelcome=function(){document.getElementById("welcome").removeAttribute("open"),document.getElementById("welcome").classList.add("visuallyHidden");var e=a.props.emailProp;h.a.database().ref().child(e).child("welcome").push("closed")},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.emailProp;e&&h.a.database().ref().child(e).child("welcome").on("value",(function(e){var t=e.val();for(var a in t)"closed"===t[a]&&(document.getElementById("welcome").removeAttribute("open"),document.getElementById("welcome").classList.add("visuallyHidden"))}))}},{key:"render",value:function(){return l.a.createElement("dialog",{id:"welcome",className:"welcome",open:!0},l.a.createElement("div",{className:"titleBar"},l.a.createElement("button",{id:"closeBtn",onClick:this.closeWelcome,title:"Close window"},"X")),l.a.createElement("h1",null,"Welcome to QuickNotes!"),l.a.createElement("p",null,"QuickNotes is an application that allows you to save all your notes and photos in one convenient place."),l.a.createElement("p",null,"Choose a button in the right panel to get started:"),l.a.createElement("ul",null,l.a.createElement("li",null,"- Toggle the switch to change themes"),l.a.createElement("li",null,"- Click the triangle (\u25b2) to upload a photo"),l.a.createElement("li",null,"- Click the plus sign (+) to create a new note"),l.a.createElement("li",null,"- Click the half-filled circle (\u25d1) to log out"),l.a.createElement("li",null,'- Click the "x" to delete an item and close the window')))}}]),t}(n.Component)),v=a(16),f=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).closeDialog=function(){document.getElementById("dialog").removeAttribute("open"),document.getElementById("dialog").classList.add("visuallyHidden"),document.getElementById("edit").removeAttribute("open"),document.getElementById("edit").classList.add("visuallyHidden"),e.setState({userInput:"",noteId:null})},e.handleChange=function(t){e.setState({userInput:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.userInput,n=e.props.emailProp,l=h.a.database().ref().child(n).child("notes");""!==a?(l.push(a),e.setState({userInput:""})):alert("Sorry! Blank notes cannot be submitted.")},e.editNote=function(t){t.preventDefault(),""!==t.target.id&&(document.getElementById("edit").setAttribute("open",!0),document.getElementById("edit").classList.remove("visuallyHidden"),e.setState({userInput:t.target.value,noteId:t.target.id}))},e.saveNote=function(t){t.preventDefault();var a=e.state.userInput;if(""!==a){e.setState({userInput:""}),document.getElementById("edit").removeAttribute("open"),document.getElementById("edit").classList.add("visuallyHidden");var n=e.props.emailProp;h.a.database().ref(n+"/notes/"+e.state.noteId).set(a);var l=Object(v.a)(e.state.notesList);l.forEach((function(t){t.noteId===e.state.noteId&&(t.noteText=a,e.setState({notesList:l,noteId:null}))}))}else alert("Sorry! Blank notes cannot be submitted.")},e.deleteNote=function(t){t.preventDefault();var a=e.props.emailProp;h.a.database().ref().child(a).child("notes").child(t.target.id).remove()},e.state={notesList:[],userInput:"",noteId:null},e}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.emailProp;t&&h.a.database().ref().child(t).child("notes").on("value",(function(t){var a=t.val(),n=[];for(var l in a){var o={noteId:l,noteText:a[l]};n.push(o)}e.setState({notesList:n})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("section",{className:"notes wrapper",id:"notes"},l.a.createElement("dialog",{id:"dialog",className:"newNote visuallyHidden"},l.a.createElement("form",null,l.a.createElement("div",{className:"titleBar"},l.a.createElement("button",{type:"button",id:"closeBtn",onClick:this.closeDialog,title:"Close window"},"X"),l.a.createElement("button",{type:"submit",title:"Submit note",onClick:this.handleSubmit},"Add Note +")),l.a.createElement("textarea",{type:"text",id:"noteText",rows:"7",cols:"16",onChange:this.handleChange,value:this.state.userInput}))),l.a.createElement("dialog",{id:"edit",className:"newNote visuallyHidden"},l.a.createElement("form",null,l.a.createElement("div",{className:"titleBar"},l.a.createElement("button",{type:"button",id:"closeBtn",onClick:this.closeDialog,title:"Close window"},"X"),l.a.createElement("button",{type:"submit",title:"Save note",onClick:this.saveNote},"Save Note +")),l.a.createElement("textarea",{type:"text",id:"noteText",rows:"7",cols:"16",onChange:this.handleChange,value:this.state.userInput}))),l.a.createElement("ul",{className:"notes"},this.state.notesList.map((function(t,a){return l.a.createElement("li",{key:a},l.a.createElement("div",{className:"titleBar"},l.a.createElement("button",{id:t.noteId,value:t.noteText,className:"edit",title:"Edit note",onClick:e.editNote},l.a.createElement("span",{role:"img","aria-label":"notepad","aria-hidden":"true"},"\ud83d\udcdd"),"Edit"),l.a.createElement("button",{id:t.noteId,className:"delete",onClick:e.deleteNote,title:"Delete note",tabIndex:"0"},"X")),l.a.createElement("textarea",{rows:"7",cols:"16",value:t.noteText,readOnly:!0}))}))))}}]),t}(n.Component),E=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){var a=t.target.files[0];if(e.setState({selectedFile:a}),"image/jpeg"===a.type||"image/jpg"===a.type||"image/png"===a.type||"image/gif"===a.type){var n=e.props.emailProp;h.a.database().ref().child(n).child("photos").push(a.name),p.ref(a.name).put(a).on("state_changed",(function(){h.a.database().ref().child(n).child("photos").on("value",(function(t){var a=t.val(),n=[],l=function(t){p.ref().child(a[t]).getDownloadURL().then((function(l){var o={photoId:t,photoName:a[t],photoUrl:l};n.push(o),e.setState({photosList:n})}))};for(var o in a)l(o)}))}),(function(e){alert("We could not upload your file at this time due to ".concat(e.code,". Please try again later."))}))}else alert("Sorry! The file format you uploaded could not be processed. Only JPG, JPEG, PNG and GIF files are allowed.")},e.deletePhoto=function(t){var a=e.props.emailProp;h.a.database().ref().child(a).child("photos").child(t.target.id).remove();var n=0;e.state.photosList.forEach((function(e){t.target.name===e.photoName&&(n+=1)})),n<2&&p.ref().child(t.target.name).delete()},e.state={photosList:[],selectedFile:null},e}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.emailProp;t&&h.a.database().ref().child(t).child("photos").on("value",(function(t){var a=t.val(),n=[],l=function(t){p.ref().child(a[t]).getDownloadURL().then((function(l){var o={photoId:t,photoName:a[t],photoUrl:l};n.push(o),e.setState({photosList:n})}))};for(var o in a)l(o)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("section",{className:"photos wrapper",id:"photos"},l.a.createElement("input",{id:"fileUpload",type:"file",className:"customUpload visuallyHidden",tabIndex:"1",onChange:this.handleChange,accept:"image/*"}),l.a.createElement("label",{htmlFor:"fileUpload",className:"customUpload",title:"Upload photo"},l.a.createElement("span",{className:"visuallyHidden"},"Click here to upload an image"),"\u25b2"),l.a.createElement("ul",{className:"gallery"},this.state.photosList.map((function(t,a){return l.a.createElement("li",{key:a},l.a.createElement("div",{className:"titleBar"},l.a.createElement("button",{id:t.photoId,name:t.photoName,className:"delete",onClick:e.deletePhoto,title:"Delete photo",tabIndex:"0"},"X")),l.a.createElement("img",{src:t.photoUrl,alt:t.photoName}))}))))}}]),t}(n.Component),b=h.a.auth(),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).login=function(e){e.preventDefault();var t=document.getElementById("textEmail").value,n=document.getElementById("textPassword").value;b.signInWithEmailAndPassword(t,n).then((function(e){var t=e.user,n=e.user.email;a.props.setUserProp(t,n)})).catch((function(e){var t=e.message;alert(t)}))},a.signUp=function(e){e.preventDefault();var t=document.getElementById("textEmail").value,a=document.getElementById("textPassword").value;b.createUserWithEmailAndPassword(t,a).catch((function(e){var t=e.message;alert(t)}))},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("form",{className:"homePage"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("h1",null,"Welcome to QuickNotes!"),l.a.createElement("p",null,"Log in or create an account if you don't have one already. To create an account, enter an email and password before clicking sign up."),l.a.createElement("label",{htmlFor:"textEmail",className:"visuallyHidden"},"Enter your email:"),l.a.createElement("input",{id:"textEmail",type:"email",placeholder:"Email"}),l.a.createElement("label",{htmlFor:"textPassword",className:"visuallyHidden"},"Enter your password:"),l.a.createElement("input",{id:"textPassword",type:"password",placeholder:"Password"}),l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{onClick:this.login,id:"loginBtn"},"Log In"),l.a.createElement("button",{onClick:this.signUp,id:"signUpBtn"},"Sign Up")),l.a.createElement("p",{className:"aside"},"Click ",l.a.createElement("a",{href:"https://alissacheng.github.io/alissaChengQuickNotes/"},"here")," to test out the app without making an account or click ",l.a.createElement("a",{href:"https://github.com/alissacheng/alissaChengQuickNotes"},"here")," to see the test version on GitHub.")))}}]),t}(n.Component),k=function(e){return l.a.createElement("div",null,l.a.createElement("label",{className:"switch",title:"Change theme"},l.a.createElement("span",{className:"visuallyHidden"},"Click here to change the theme"),l.a.createElement("input",{type:"checkbox",onChange:e.toggleThemeProp,id:"toggleTheme",className:"visuallyHidden"}),l.a.createElement("span",{className:"slider"})),l.a.createElement("button",{type:"open",onClick:e.openDialogProp,title:"New note"},l.a.createElement("span",{className:"visuallyHidden"},"Click here to write a new note"),"+"),l.a.createElement("button",{onClick:e.logoutProp,className:"logoutBtn",title:"Log out"},l.a.createElement("span",{className:"visuallyHidden"},"Click here to log out"),"\u25d1"))},w=h.a.auth(),I=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).openDialog=function(){document.getElementById("dialog").setAttribute("open",!0),document.getElementById("dialog").classList.remove("visuallyHidden")},e.toggleTheme=function(t){var a=h.a.database().ref().child(e.state.emailFirebase).child("theme");!0===t.target.checked?(document.body.style.background="#8386de",a.push("lavender")):(document.body.style.background="url(./assets/corkBoard.jpg)",a.push("cork"))},e.setUser=function(t,a){e.setState({user:t,email:a})},e.logout=function(){w.signOut().then((function(){e.setState({user:null,email:null})}))},e.state={user:null,email:null,emailFirebase:null},e}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.onAuthStateChanged((function(t){var a=t.email,n=a.split(".")[0]+a.split(".")[1];t&&(e.setState({user:t,email:a,emailFirebase:n}),h.a.database().ref().child(n).child("theme").on("value",(function(e){var t=e.val(),a=0,n=0;for(var l in t)"lavender"===t[l]?a+=1:n+=1,a===n?(document.body.style.background="url(./assets/corkBoard.jpg)",document.getElementById("toggleTheme").checked=!1):(document.body.style.background="#8386de",document.getElementById("toggleTheme").checked=!0)})))}))}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.user?l.a.createElement("main",null,l.a.createElement(k,{logoutProp:this.logout,toggleThemeProp:this.toggleTheme,openDialogProp:this.openDialog}),l.a.createElement(g,{emailProp:this.state.emailFirebase}),l.a.createElement(f,{emailProp:this.state.emailFirebase}),l.a.createElement(E,{emailProp:this.state.emailFirebase})):l.a.createElement(y,{setUserProp:this.setUser}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){}},[[17,1,2]]]);
//# sourceMappingURL=main.3909cf4a.chunk.js.map