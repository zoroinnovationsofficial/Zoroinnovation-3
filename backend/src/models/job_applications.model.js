import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const jobApplicationSchema = new Schema(
  {
    jobId: {
      type: Schema.Types.ObjectId,
      ref: 'JobOpportunity',
    },
    applicant: {
      firstName: String,
      lastName: String,
      email: String,
      phone: String,
      location: {
        city: String,
        state: String,
        country: String,
      },
    },
    resume: {
      filename: String,
      originalName: String,
      fileUrl: String,
      fileSize: Number,
      uploadedAt: Date,
    },
    coverLetter: String,
    portfolioUrl: String,
    linkedinUrl: String,
    githubUrl: String,
    expectedSalary: {
      amount: Number,
      currency: String,
      period: String,
    },
    availableStartDate: Date,
    yearsOfExperience: Number,
    skills: [String],
    status: {
      type: String,
      enum: [
        'applied',
        'screening',
        'interview',
        'rejected',
        'hired',
        'withdrawn',
      ],
      default: 'applied',
    },
    stages: [
      {
        stage: String,
        status: String,
        date: Date,
        notes: String,
        interviewer: {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      },
    ],
    notes: [
      {
        addedBy: {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
        note: String,
        isInternal: Boolean,
        addedAt: Date,
      },
    ],
    source: {
      type: String,
      enum: ['website', 'linkedin', 'referral', 'job_board'],
    },
    referredBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
  },
  { timestamps: true }
);

const JobApplication = model('JobApplication', jobApplicationSchema);
export default JobApplication;
