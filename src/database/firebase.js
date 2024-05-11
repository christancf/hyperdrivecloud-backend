import { initializeApp } from "firebase-admin/app";
import admin from "firebase-admin";
import { firebaseConfig } from "./hyperdrive-cloud-firebase-adminsdk-snoph-19b0249c85.js";

import { getAuth } from "firebase-admin/auth";

initializeApp({
  credential: admin.credential.cert(firebaseConfig),
});

const auth = getAuth();

export default auth;
