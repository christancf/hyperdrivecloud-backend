import auth from "../database/firebase.js";

export const signUpUser = (data) => {
  auth
    .createUser({
      email: data.email,
      emailVerified: false,
      phoneNumber: data.phoneNumber,
      password: data.password,
      displayName: data.displayName,
      disabled: false,
    })
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log("Successfully created new user:", userRecord.uid);
      return {
        message: `Successfully created new user ${userRecord.uid}`,
      };
    })
    .catch((error) => {
      console.log("Error creating new user:", error);
    });
};

export const removeUser = (uid) => {
  auth
    .deleteUser(uid)
    .then(() => {
      console.log("Successfully deleted user");
      return {
        message: `Successfully deleted user ${uid}`,
      };
    })
    .catch((error) => {
      console.log("Error deleting user:", error);
    });
};

export const updateUser = (data) => {
  auth
    .updateUser(uid, {
      email: data.email,
      emailVerified: false,
      phoneNumber: data.phoneNumber,
      displayName: data.displayName,
      disabled: false,
    })
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log("Successfully updated user", userRecord.toJSON());
      return {
        message: "Successfully updated user",
        payload: userRecord.toJSON(),
      };
    })
    .catch((error) => {
      console.log("Error updating user:", error);
    });
};

export const getUserByEmail = (email) => {
  auth
    .getUserByEmail(email)
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
      return {
        message: "Successfully fetched user data",
        payload: userRecord.toJSON(),
      };
    })
    .catch((error) => {
      console.log("Error fetching user data:", error);
    });
};

export const getUserById = (uid) => {
  auth
    .getUser(uid)
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
      return {
        message: "Successfully fetched user data",
        payload: userRecord.toJSON(),
      };
    })
    .catch((error) => {
      console.log("Error fetching user data:", error);
    });
};
