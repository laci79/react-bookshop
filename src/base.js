import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBL7kcOi6St5Ok40XEYOswtlCPi1BtFPN4",
    authDomain: "react-bookshop-4be0f.firebaseapp.com",
    databaseURL: "https://react-bookshop-4be0f-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export { base };
export default base;