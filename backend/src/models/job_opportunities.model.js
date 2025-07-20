import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const jobOpportunitySchema = new Schema(
  {
    title: String,
    description: String,
    department: {
      type: String,
      enum: ['Engineering', 'Design', 'Marketing', 'Sales'],
    },
    employmentType: {
      type: String,
      enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
    },
    workType: {
      type: String,
      enum: ['Remote', 'Hybrid', 'On-site'],
    },
    location: {
      city: String,
      state: String,
      country: String,
      isRemote: Boolean,
    },
    salary: {
      min: Number,
      max: Number,
      currency: String,
      period: {
        type: String,
        enum: ['per annum', 'per month', 'per hour'],
      },
    },
    requirements: {
      skills: [String],
      experience: {
        min: Number,
        max: Number,
      },
      education: [String],
      certifications: [String],
    },
    responsibilities: [String],
    benefits: [String],
    applicationDeadline: Date,
    isActive: Boolean,
    isFeatured: Boolean,
    isUrgent: Boolean,
    openings: Number,
    applicationsCount: {
      type: Number,
      default: 0,
    },
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    hiringManager: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    tags: [String],
    slug: String,
    seoTitle: String,
    seoDescription: String,
  },
  { timestamps: true }
);

const JobOpportunity = model('JobOpportunity', jobOpportunitySchema);
export default JobOpportunity;
