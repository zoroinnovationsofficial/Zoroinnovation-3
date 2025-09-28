import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema({
  googleFormLink: {
    type: String,
    default: '',
    trim: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Ensure only one settings document exists
settingsSchema.statics.getSettings = async function() {
  try {
    let settings = await this.findOne();
    if (!settings) {
      console.log('No settings found, creating new settings document...');
      settings = await this.create({ googleFormLink: '' });
      console.log('New settings document created:', settings);
    }
    return settings;
  } catch (error) {
    console.error('Error in getSettings:', error);
    throw error;
  }
};

const Settings = mongoose.model('Settings', settingsSchema);

export default Settings;
