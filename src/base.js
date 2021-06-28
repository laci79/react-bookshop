import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCOibP20tbq37CxQukWYTly8FkcL2bI-44",
    authDomain: "react-tutorial-1bb66.firebaseapp.com",
    databaseURL: "https://react-tutorial-1bb66-default-rtdb.europe-west1.firebasedatabase.app"
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export { base };
export default base;