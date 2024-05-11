import {
  signUpUser,
  removeUser,
  updateUser,
  getUserByEmail,
  getUserById,
  resetPassword,
} from "../repositories/user.js";

export const registerUser = async (req, res) => {
  console.log(req.body);
  const result = await signUpUser(req.body);
  console.log(result);
  res.json(result);
};

export const deleteUser = async (req, res) => {
  console.log(req.params);
  const { uid } = req.params;
  console.log(uid);
  const result = await removeUser(uid);
  console.log(result);
  res.json(result);
};

export const editUser = async (req, res) => {
  console.log(req.body);
  const { uid } = req.params;
  const result = await updateUser(uid, req.body);
  console.log(result);
  res.json(result);
};

export const getUserByEmailService = async (req, res) => {
  const { email } = req.params;
  const result = await getUserByEmail(email);
  console.log(result);
  res.json(result);
};

export const getUserByIdService = async (req, res) => {
  const { uid } = req.params;
  const result = await getUserById(uid);
  console.log(result);
  res.json(result);
};

// reset password service
export const resetPasswordService = async (req, res) => {
  const { email } = req.params;
  const result = await resetPassword(email, req.body);
  console.log(result);
  res.json(result);
};
