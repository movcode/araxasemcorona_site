import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD-YegMh5RgSUDuzMfx5yixkvuHfVT2TG0",
    authDomain: "araxasemcorona.firebaseapp.com",
    databaseURL: "https://araxasemcorona.firebaseio.com",
    projectId: "araxasemcorona",
    storageBucket: "araxasemcorona.appspot.com",
    messagingSenderId: "622218327576",
    appId: "1:622218327576:web:d3403f7746c4e6cd50b56d",
    measurementId: "G-34SYE5ZYVC"
};

firebase.initializeApp(firebaseConfig);

export default firebase;