import mongoose, { Schema, model, models } from 'mongoose';

const AdminSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  name: {
    type: String,
    default: 'Admin',
  },
  role: {
    type: String,
    default: 'admin',
  },
}, {
  timestamps: true,
});

const Admin = models.Admin || model('Admin', AdminSchema);

export default Admin;
