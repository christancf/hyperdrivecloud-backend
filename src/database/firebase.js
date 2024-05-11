import { initializeApp } from "firebase-admin/app";
import { firebaseConfig } from "./hyperdrive-cloud-firebase-adminsdk-snoph-19b0249c85";

const { getAuth } = require("firebase-admin/auth");

initializeApp({
  credential: admin.credential.cert(firebaseConfig),
});

const auth = getAuth();

export default auth;
