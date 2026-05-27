import mongoose, { Schema, model, models } from 'mongoose';

const DiagnosticSignalSchema = new Schema({
  breaking:  { type: String, required: true },
  whyNow:    { type: String, default: '' },
  signal:    { type: String, default: '' },
  role:      { type: String, default: '' },
  company:   { type: String, default: '' },
  size:      { type: String, default: '' },
  name:      { type: String, required: true },
  email:     { type: String, required: true },
  phone:     { type: String, default: '' },
  callback:  { type: String, default: '' },
  status:    { type: String, enum: ['new', 'read', 'contacted'], default: 'new' },
}, { timestamps: true });

const DiagnosticSignal = models.DiagnosticSignal || model('DiagnosticSignal', DiagnosticSignalSchema);

export default DiagnosticSignal;
