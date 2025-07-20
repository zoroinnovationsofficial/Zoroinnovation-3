import JobApplication from '../models/job_applications.model.js';
import JobCategory from '../models/job_categories.model.js';
import JobOpportunity from '../models/job_opportunities.model.js';

// GET /api/jobs
export const getAllJobs = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const query = { isActive: true };

    const totalItems = await JobOpportunity.countDocuments(query);
    const jobs = await JobOpportunity.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .select('-seoTitle -seoDescription -updatedAt');

    res.json({
      success: true,
      data: jobs,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(totalItems / limit),
        totalItems,
      },
      filters: {
        departments: await JobOpportunity.distinct('department'),
        locations: await JobOpportunity.distinct('location.city'),
        employmentTypes: await JobOpportunity.distinct('employmentType'),
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET /api/jobs/:id
export const getJobById = async (req, res) => {
  try {
    const job = await JobOpportunity.findById(req.params.id);
    if (!job)
      return res.status(404).json({ success: false, message: 'Job not found' });
    res.json({ success: true, data: job });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET /api/jobs/slug/:slug
export const getJobBySlug = async (req, res) => {
  try {
    const job = await JobOpportunity.findOne({ slug: req.params.slug });
    if (!job)
      return res.status(404).json({ success: false, message: 'Job not found' });
    res.json({ success: true, data: job });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET /api/jobs/category/:category
export const getJobsByCategory = async (req, res) => {
  try {
    const jobs = await JobOpportunity.find({
      department: req.params.category,
      isActive: true,
    });
    res.json({ success: true, data: jobs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET /api/jobs/search
export const searchJobs = async (req, res) => {
  try {
    const { keyword, location, employmentType, department } = req.query;

    const query = { isActive: true };

    if (keyword) {
      query.$or = [
        { title: { $regex: keyword, $options: 'i' } },
        { description: { $regex: keyword, $options: 'i' } },
        { tags: { $regex: keyword, $options: 'i' } },
      ];
    }

    if (location) query['location.city'] = location;
    if (employmentType) query.employmentType = employmentType;
    if (department) query.department = department;

    const jobs = await JobOpportunity.find(query).sort({ createdAt: -1 });
    res.json({ success: true, data: jobs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// POST /api/jobs/:id/apply
export const submitApplication = async (req, res) => {
  try {
    const jobId = req.params.id;

    const newApp = new JobApplication({
      jobId,
      ...req.body,
      status: 'applied',
    });

    await newApp.save();

    await JobOpportunity.findByIdAndUpdate(jobId, {
      $inc: { applicationsCount: 1 },
    });

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully!',
      data: {
        applicationId: newApp._id,
        applicationNumber: `APP-${newApp.createdAt.getFullYear()}-${newApp._id
          .toString()
          .slice(-4)}`,
        status: newApp.status,
        nextSteps:
          'We will review your application and get back to you within 5 business days.',
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET /api/job-categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await JobCategory.find({ isActive: true }).sort({
      displayOrder: 1,
    });
    res.json({ success: true, data: categories });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
