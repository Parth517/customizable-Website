import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true }, // Changed to passwordHash
});

userSchema.methods.setPassword = async function(password) {
    this.passwordHash = await bcrypt.hash(password, 10);
};

userSchema.methods.validatePassword = async function(password) {
    return await bcrypt.compare(password, this.passwordHash); // Changed to passwordHash
};

const User = mongoose.model('User', userSchema);
export default User;
