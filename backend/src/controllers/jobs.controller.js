import Job from '../models/job.model.js'; // Ensure the path is correct

// Controller to get all job postings
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    return res.status(200).json(jobs);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch jobs.', error: error.message });
  }
};

// Controller to create a new job posting
const createNewJob = async (req, res) => {
  try {
    // Get the new job data from the request body
    const { title, department, location, status, date } = req.body;
    
    // Validate that all required fields are present
    if (!title || !department || !location || !date) {
      return res.status(400).json({ message: 'All fields (title, department, location, date) are required.' });
    }

    // Create a new job document
    const newJob = new Job({
      title,
      department,
      location,
      status, // 'status' is optional in some contexts, but included here for consistency
      date
    });

    // Save the new job to the database
    await newJob.save();

    return res.status(201).json(newJob);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to create new job.', error: error.message });
  }
};

// Controller to update an existing job posting
const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedJob = await Job.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedJob) {
      return res.status(404).json({ message: 'Job not found.' });
    }

    return res.status(200).json(updatedJob);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to update job.', error: error.message });
  }
};

// Controller to delete a job posting
const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedJob = await Job.findByIdAndDelete(id);

    if (!deletedJob) {
      return res.status(404).json({ message: 'Job not found.' });
    }

    return res.status(200).json({ message: 'Job deleted successfully.' });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to delete job.', error: error.message });
  }
};

// Export all the controller functions as a single default export
export default {
  getAllJobs,
  createNewJob,
  updateJob,
  deleteJob
};
