import { initializeApp } from 'firebase/app';
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '../dataconnect-generated';

const firebaseConfig = {
  apiKey: "AIzaSyDXFy2bEEsfkR7ViiHU4VvXksKnsbVnWGw",
  authDomain: "ganyanassist.firebaseapp.com",
  projectId: "ganyanassist",
  storageBucket: "ganyanassist.firebasestorage.app",
  messagingSenderId: "886360018890",
  appId: "1:886360018890:web:1fd045c60c735378bb4933"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Data Connect
export const dataConnect = getDataConnect(app, connectorConfig);

// For local development with emulator (optional)
// if (import.meta.env.DEV) {
//   connectDataConnectEmulator(dataConnect, 'localhost', 9399);
// }
