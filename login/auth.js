// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
      console.log('user logged in: ', user);
      var redirect = "../";
      window.location.href = redirect;
    } else {
      console.log('user logged out');
    }
  })
  

// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = signupForm['user-email'].value;
    const password = signupForm['user-pass'].value;

    //console.log(email);
    //console.log(password);

    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        //console.log(cred.user);
        // close the signup modal & reset form
        //const modal = document.querySelector('#modal-signup');
        //M.Modal.getInstance(modal).close();
        signupForm.reset();
    });
});

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = loginForm['inputEmail'].value;
  const password = loginForm['inputPassword'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    //console.log(cred.user);
    // close the signup modal & reset form
    //const modal = document.querySelector('#modal-login');
    //M.Modal.getInstance(modal).close();
    loginForm.reset();
  });

});