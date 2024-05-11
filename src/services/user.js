import { signUpUser } from "../repositories/user.js";

export const registerUser = async (data) => {
  await signUpUser(data);
};
