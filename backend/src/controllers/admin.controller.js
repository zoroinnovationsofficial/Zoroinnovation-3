import Contact from '../models/contacts.model.js';
import Settings from '../models/settings.model.js';

// All messages
export const getAllMessages = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      status,
      priority,
      search,
      dateFrom,
      dateTo,
      sortBy = 'date',
      sortOrder = 'desc',
    } = req.query;

    const filter = {};

    // Filter by status
    if (status) {
      filter.status = status;
    }

    // Filter by priority (if you add it to your schema)
    if (priority) {
      filter.priority = priority;
    }

    // Search by name, email, or message
    if (search) {
      const regex = new RegExp(search, 'i'); // case-insensitive
      filter.$or = [
        { name: regex },
        { email: regex },
        { message: regex },
        { subject: regex },
      ];
    }

    // Filter by date range
    if (dateFrom || dateTo) {
      filter.date = {};
      if (dateFrom) filter.date.$gte = new Date(dateFrom);
      if (dateTo) filter.date.$lte = new Date(dateTo);
    }

    // Build sorting object
    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;

    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const totalMessages = await Contact.countDocuments(filter);
    const messages = await Contact.find(filter)
      .sort(sortOptions)
      .skip(skip)
      .limit(parseInt(limit));

    res.status(200).json({
      message: 'Messages fetched successfully.',
      page: parseInt(page),
      limit: parseInt(limit),
      total: totalMessages,
      data: messages,
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Something went wrong.' });
  }
};

// Messaage status update
export const updateMessageStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const allowedStatuses = ['new', 'read', 'responded'];
    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ error: 'Invalid status value.' });
    }

    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      { ...req.body, status },
      { new: true },
    );

    if (!updatedContact) {
      return res.status(404).json({ error: 'Contact not found.' });
    }

    res.status(200).json({
      message: 'Message status updated successfully.',
      data: updatedContact,
    });
  } catch (error) {
    console.error('Error updating message status:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Contact delete
export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({ error: 'Contact not found.' });
    }

    res.status(200).json({
      message: 'Contact deleted successfully.',
      data: deletedContact,
    });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({ error: 'Server error.' });
  }
};

// Get single message data
export const viewSingleMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await Contact.findById(id);

    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }

    res.status(200).json({
      message: 'Message retrieved successfully',
      data: message,
    });
  } catch (error) {
    console.error('Error fetching message by ID:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get settings (including Google form link)
export const getSettings = async (req, res) => {
  try {
    console.log('Fetching settings...');
    const settings = await Settings.getSettings();
    console.log('Settings retrieved:', settings);
    res.status(200).json({
      message: 'Settings retrieved successfully',
      data: settings,
    });
  } catch (error) {
    console.error('Error fetching settings:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update settings (including Google form link)
export const updateSettings = async (req, res) => {
  try {
    const { googleFormLink } = req.body;
    console.log('Updating settings with Google form link:', googleFormLink);
    
    const settings = await Settings.getSettings();
    console.log('Current settings before update:', settings);
    
    settings.googleFormLink = googleFormLink || '';
    settings.updatedAt = new Date();
    
    const savedSettings = await settings.save();
    console.log('Settings saved successfully:', savedSettings);
    
    res.status(200).json({
      message: 'Settings updated successfully',
      data: savedSettings,
    });
  } catch (error) {
    console.error('Error updating settings:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
