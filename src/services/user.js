import { signUpUser } from "../repositories/user.js";

export const registerUser = async (req, res) => {
  console.log(req.body);
  const result = await signUpUser(req.body);
  console.log(result);
  res.json(result);
};
