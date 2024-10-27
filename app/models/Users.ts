import { model, Schema } from "mongoose";

const UserSchema = new Schema({
	user_id: {
		type: String,
		required: true,
		unique: true,
	},
	name: String,
	surname: String,
	phone: String,
	email: String,
	password: String
});

export default model("User",UserSchema);