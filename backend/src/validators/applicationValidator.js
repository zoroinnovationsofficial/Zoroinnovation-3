import { body, validationResult } from 'express-validator';

export const validateApplication = [
  body('applicant.firstName')
    .isLength({ min: 2 })
    .withMessage('First name is required'),
  body('applicant.lastName')
    .isLength({ min: 2 })
    .withMessage('Last name is required'),
  body('applicant.email').isEmail().withMessage('Valid email is required'),
  body('applicant.phone').notEmpty().withMessage('Phone number is required'),
  body('resume.fileUrl').notEmpty().withMessage('Resume URL is required'),
  body('expectedSalary.amount').isNumeric().optional(),
  body('yearsOfExperience').isNumeric().optional(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ success: false, errors: errors.array() });
    next();
  },
];
