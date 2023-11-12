import mongoose, { model } from "mongoose";
import crypto from "crypto";

const User = model("User", {
  nome: String,
  email: String,
  senha: String,
  perfil: String,
  foto: String,
});

User.schema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

export default User;
