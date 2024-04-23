import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { readFileSync } from 'fs';
import products from './getProducts.js';

// Acá van las credenciales de FireStore
const firebaseConfig = {
  apiKey: "AIzaSyAAPSDtVlQxfPcvSPGLJOUDbvssN8gZPgU",
  authDomain: "ecommerce-54085.firebaseapp.com",
  projectId: "ecommerce-54085",
  storageBucket: "ecommerce-54085.appspot.com",
  messagingSenderId: "934209356089",
  appId: "1:934209356089:web:44fc016c6db451054628e8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const collectionRef = collection(db, 'products'); //Editar la colección si corresponde. 

// Lee el json verificar que el nombre del archivo json sea correcto, sino modificar. 
//const dataArray = JSON.parse(readFileSync('./data.json', 'utf8'));
 
console.log(products)

const dataArray = products

// Acá hacer un loop por cada archivo y lo sube a la coleccion de referencia. 
dataArray.forEach(async (data) => {
  try {
    const docRef = await addDoc(collectionRef, data);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
});

// ejecutar en consola "node upload_data.js" para correr el srcipt
