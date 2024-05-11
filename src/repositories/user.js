import auth from "../database/firebase.js";

export const signUpUser = async (data) => {
  try {
    const user = await auth.createUser({
      email: data.email,
      emailVerified: false,
      password: data.password,
      displayName: data.displayName,
      disabled: false,
    });
    return {
      message: `Successfully created new user ${user.uid}`,
    };
  } catch (error) {
    console.log("Error creating new user:", error);
  }
};

export const removeUser = async (uid) => {
  try {
    const newUser = await auth.deleteUser(uid);
    return {
      message: `Successfully deleted user ${uid}`,
    };
  } catch (error) {
    console.log("Error deleting user:", error);
  }
};

export const updateUser = async (uid, data) => {
  try {
    const userRecord = await auth.updateUser(uid, {
      email: data.email,
      emailVerified: false,
      phoneNumber: data.phoneNumber,
      displayName: data.displayName,
      disabled: false,
    });
    return {
      message: "Successfully updated user",
      payload: userRecord.toJSON(),
    };
  } catch (error) {
    console.log("Error updating user:", error);
  }
};

export const getUserByEmail = async (email) => {
  try {
    const userRecord = await auth.getUserByEmail(email);
    return {
      message: "Successfully fetched user data",
      payload: userRecord.toJSON(),
    };
  } catch (error) {
    console.log("Error fetching user data:", error);
  }
};

export const getUserById = async (uid) => {
  try {
    const userRecord = await auth.getUser(uid);
    return {
      message: "Successfully fetched user data",
      payload: userRecord.toJSON(),
    };
  } catch (error) {
    console.log("Error fetching user data:", error);
  }
};

// reset password
export const resetPassword = async (uid, data) => {
  try {
    await auth.updatePassword(uid, {
      password: data.password,
    });
    return {
      message: "Password is reset",
    };
  } catch (error) {
    console.log("Error resetting password:", error);
  }
};
