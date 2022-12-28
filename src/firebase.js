import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDSgAbZDUVOJ73OzemHQ1G_Pc2-t_ralec",
    authDomain: "auth-test-aff75.firebaseapp.com",
    projectId: "auth-test-aff75",
    storageBucket: "auth-test-aff75.appspot.com",
    messagingSenderId: "171751516373",
    appId: "1:171751516373:web:27f6c28e4fa96fa8e69a5c"
})

export const auth = app.auth()
export default app

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);