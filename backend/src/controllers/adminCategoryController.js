import JobCategory from '../models/job_categories.js';

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
