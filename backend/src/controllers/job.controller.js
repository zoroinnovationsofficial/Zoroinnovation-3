import Job from '../models/job.model.js';

// Get all jobs
export const getAllJobs = async (req, res) => {
  try {
    console.log('🔍 getAllJobs called');
    console.log('📊 Job model:', Job);
    console.log('🔗 Database connection status:', Job.db.readyState);
    
    const jobs = await Job.find().sort({ createdAt: -1 });
    console.log('📝 Found jobs:', jobs.length);
    
    res.status(200).json({
      message: 'Jobs retrieved successfully',
      data: jobs,
    });
  } catch (error) {
    console.error('❌ Error fetching jobs:', error);
    console.error('❌ Error details:', error.message);
    console.error('❌ Error stack:', error.stack);
    res.status(500).json({ 
      error: 'Server error',
      details: error.message 
    });
  }
};

// Get open jobs (for public)
export const getOpenJobs = async (req, res) => {
  try {
    console.log('🔍 getOpenJobs called');
    const jobs = await Job.find({ status: 'Open' }).sort({ createdAt: -1 });
    console.log('📝 Found open jobs:', jobs.length);
    
    res.status(200).json({
      message: 'Open jobs retrieved successfully',
      data: jobs,
    });
  } catch (error) {
    console.error('❌ Error fetching open jobs:', error);
    console.error('❌ Error details:', error.message);
    res.status(500).json({ 
      error: 'Server error',
      details: error.message 
    });
  }
};

// Create new job
export const createJob = async (req, res) => {
  try {
    const jobData = req.body;
    const newJob = new Job(jobData);
    const savedJob = await newJob.save();
    
    res.status(201).json({
      message: 'Job created successfully',
      data: savedJob,
    });
  } catch (error) {
    console.error('Error creating job:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update job
export const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    const updatedJob = await Job.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );
    
    if (!updatedJob) {
      return res.status(404).json({ error: 'Job not found' });
    }
    
    res.status(200).json({
      message: 'Job updated successfully',
      data: updatedJob,
    });
  } catch (error) {
    console.error('Error updating job:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete job
export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    
    const deletedJob = await Job.findByIdAndDelete(id);
    
    if (!deletedJob) {
      return res.status(404).json({ error: 'Job not found' });
    }
    
    res.status(200).json({
      message: 'Job deleted successfully',
      data: deletedJob,
    });
  } catch (error) {
    console.error('Error deleting job:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Toggle job status
export const toggleJobStatus = async (req, res) => {
  try {
    const { id } = req.params;
    
    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    
    job.status = job.status === 'Open' ? 'Closed' : 'Open';
    await job.save();
    
    res.status(200).json({
      message: 'Job status updated successfully',
      data: job,
    });
  } catch (error) {
    console.error('Error toggling job status:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
