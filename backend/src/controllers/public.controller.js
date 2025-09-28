import Contact from '../models/contacts.model.js';
import Settings from '../models/settings.model.js';

// Save message to db
export const submitMessage = async (req, res) => {
  try {
    const { name, email, message, contactNumber, city, subject } = req.body;

    // Create and save the message
    const newContact = new Contact({
      name,
      email,
      message,
      contactNumber,
      city,
      subject,
    });

    const savedContact = await newContact.save();

    res.status(201).json({
      message: 'Message submitted successfully.',
      data: savedContact,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Something went wrong. Please try again later.' });
  }
};

// Get all contacts (admin only)
export const getAllContacts = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      status,
      search,
      sortBy = 'date',
      sortOrder = 'desc',
    } = req.query;

    const filter = {};

    // Filter by status
    if (status) {
      filter.status = status;
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

    // Build sorting object
    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;

    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const totalContacts = await Contact.countDocuments(filter);
    const contacts = await Contact.find(filter)
      .sort(sortOptions)
      .skip(skip)
      .limit(parseInt(limit));

    res.status(200).json({
      message: 'Contacts fetched successfully.',
      page: parseInt(page),
      limit: parseInt(limit),
      total: totalContacts,
      data: contacts,
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Something went wrong.' });
  }
};

// Get Google form link (public)
export const getGoogleFormLink = async (req, res) => {
  try {
    console.log('Fetching Google form link for public access...');
    const settings = await Settings.getSettings();
    console.log('Public Google form link retrieved:', settings.googleFormLink);
    res.status(200).json({
      message: 'Google form link retrieved successfully',
      data: { googleFormLink: settings.googleFormLink },
    });
  } catch (error) {
    console.error('Error fetching Google form link:', error);
    res.status(500).json({ error: 'Server error' });
  }
};