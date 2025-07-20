import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const jobCategorySchema = new Schema(
  {
    name: String,
    description: String,
    icon: String,
    isActive: {
      type: Boolean,
      default: true,
    },
    jobCount: {
      type: Number,
      default: 0,
    },
    displayOrder: Number,
  },
  { timestamps: true }
);

const JobCategory = model('JobCategory', jobCategorySchema);
export default JobCategory;
