const mongoose = require('mongoose');
const { Schema } = mongoose;

const REGISTER_INFO = new Schema({
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true }
})

const BASIC_INFO = new Schema({
    fullname: { type: String, require: true },
    username: { type: String },
    credential: REGISTER_INFO
})

const CONTACT_INFO = new Schema({
    mobile: { type: String },
    location: { type: String }
})

const SOCIAL_MEDIA_PROFILE = new Schema({
    github: { type: String },
    linkedin: { type: String },
    instagram: { type: String },
    twitter: { type: String }
})

const userSchema = new Schema({
    user_info: BASIC_INFO,
    contact_info: CONTACT_INFO,
    socialMediaProfile: SOCIAL_MEDIA_PROFILE,
})

const User = mongoose.model('user', userSchema);

module.exports = User;