import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfiguration = {
  apiKey: "AIzaSyCLhqrRH6DuCiUJr7Um1Yq5A2Y4YmKSZZA",
  authDomain: "custom-resume-generator.firebaseapp.com",
  projectId: "custom-resume-generator",
  storageBucket: "custom-resume-generator.appspot.com",
  messagingSenderId: "33106145301",
  appId: "1:33106145301:web:9f6b3438d5f0f2269c9e1c",
  measurementId: "G-KP4NTRLMKT"
};

let app ;
const Apps = getApps();
if(!Apps.length){
  app = initializeApp(firebaseConfiguration);
}else {
  app = Apps[0];
}

export const Authenticator = getAuth(app, {});
export const Database = getFirestore(app, {});
