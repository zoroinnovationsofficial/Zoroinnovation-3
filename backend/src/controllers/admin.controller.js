import JobApplication from '../models/job_applications.model.js';
import JobCategory from '../models/job_categories.model.js';
import JobOpportunity from '../models/job_opportunities.model.js';

import slugify from 'slugify';

// Application Controllers
// Get all job applications
export const getAllApplications = async (req, res) => {
  try {
    const applications = await JobApplication.find().sort({ createdAt: -1 });
    res.json({ success: true, data: applications });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get applications for a specific job
export const getApplicationsForJob = async (req, res) => {
  try {
    const { id } = req.params;
    const applications = await JobApplication.find({ jobId: id }).sort({
      createdAt: -1,
    });
    res.json({ success: true, data: applications });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get a single application by ID
export const getApplicationById = async (req, res) => {
  try {
    const application = await JobApplication.findById(req.params.id);
    if (!application)
      return res
        .status(404)
        .json({ success: false, message: 'Application not found' });

    res.json({ success: true, data: application });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update status of an application (e.g., to 'screening', 'hired', etc.)
export const updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const application = await JobApplication.findById(req.params.id);

    if (!application)
      return res
        .status(404)
        .json({ success: false, message: 'Application not found' });

    application.status = status;
    application.stages.push({
      stage: status,
      status: 'updated',
      date: new Date(),
      notes: `Status changed to ${status}`,
    });

    await application.save();
    res.json({ success: true, data: application });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Add a note to application
export const addApplicationNote = async (req, res) => {
  try {
    const { note, addedBy, isInternal = true } = req.body;
    const application = await JobApplication.findById(req.params.id);

    if (!application)
      return res
        .status(404)
        .json({ success: false, message: 'Application not found' });

    application.notes.push({
      note,
      addedBy,
      isInternal,
      addedAt: new Date(),
    });

    await application.save();
    res.json({ success: true, message: 'Note added', data: application });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Category Controllers

// Create a new job category
export const createCategory = async (req, res) => {
  try {
    const {
      name,
      description,
      icon,
      isActive = true,
      displayOrder = 0,
    } = req.body;

    const newCategory = new JobCategory({
      name,
      description,
      icon,
      isActive,
      displayOrder,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await newCategory.save();
    res.status(201).json({ success: true, data: newCategory });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update an existing category
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = {
      ...req.body,
      updatedAt: new Date(),
    };

    const updatedCategory = await JobCategory.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedCategory)
      return res
        .status(404)
        .json({ success: false, message: 'Category not found' });

    res.json({ success: true, data: updatedCategory });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Job Controllers

export const createJob = async (req, res) => {
  try {
    const jobData = req.body;
    jobData.slug = slugify(jobData.title, { lower: true });

    const job = new JobOpportunity(jobData);
    await job.save();

    res.status(201).json({ success: true, data: job });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateJob = async (req, res) => {
  try {
    const updatedJob = await JobOpportunity.findByIdAndUpdate(
      req.params.id,
      { ...req.body, slug: slugify(req.body.title, { lower: true }) },
      { new: true }
    );
    res.json({ success: true, data: updatedJob });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteJob = async (req, res) => {
  try {
    await JobOpportunity.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Job deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const jobs = await JobOpportunity.find().sort({ createdAt: -1 });
    res.json({ success: true, data: jobs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const toggleJobStatus = async (req, res) => {
  try {
    const job = await JobOpportunity.findById(req.params.id);
    job.isActive = !job.isActive;
    await job.save();
    res.json({ success: true, data: job });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const toggleFeaturedStatus = async (req, res) => {
  try {
    const job = await JobOpportunity.findById(req.params.id);
    job.isFeatured = !job.isFeatured;
    await job.save();
    res.json({ success: true, data: job });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getJobAnalytics = async (req, res) => {
  try {
    const totalJobs = await JobOpportunity.countDocuments();
    const activeJobs = await JobOpportunity.countDocuments({ isActive: true });
    const featuredJobs = await JobOpportunity.countDocuments({
      isFeatured: true,
    });

    const applicationCountByJob = await JobOpportunity.aggregate([
      {
        $project: {
          title: 1,
          applicationsCount: 1,
        },
      },
      { $sort: { applicationsCount: -1 } },
    ]);

    res.json({
      success: true,
      data: {
        totalJobs,
        activeJobs,
        featuredJobs,
        applicationCountByJob,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
