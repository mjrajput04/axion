import mongoose, { Schema, model, models } from 'mongoose';

const SubscriptionSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ['active', 'unsubscribed', 'pending'],
    default: 'active',
  },
  plan: {
    type: String,
    enum: ['free', 'premium', 'enterprise'],
    default: 'free',
  },
  source: {
    type: String,
    default: 'website',
  },
}, {
  timestamps: true,
});

const Subscription = models.Subscription || model('Subscription', SubscriptionSchema);

export default Subscription;
