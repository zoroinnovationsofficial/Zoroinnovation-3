import JobApplication from '../models/job_applications.js';
import JobOpportunity from '../models/job_opportunities.js';

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
