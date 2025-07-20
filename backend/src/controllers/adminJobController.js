import slugify from 'slugify';
import JobOpportunity from '../models/job_opportunities.js';

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
