import { body, param } from 'express-validator';

const employeeIdBodyValidator = () => {
  return [
    body('employeeId')
      .notEmpty()
      .withMessage('Employee ID is required')
      .isString()
      .withMessage('Employee ID must be a string'),
  ];
};

const employeeIdParamValidator = () => {
  return [
    param('employeeId')
      .notEmpty()
      .withMessage('Employee ID is required')
      .isString()
      .withMessage('Employee ID must be a string'),
  ];
};

const createEmployeeValidator = () => {
  return [
    body('fullName')
      .optional()
      .isString()
      .withMessage('Full Name must be a string'),
    body('department')
      .optional()
      .isString()
      .withMessage('Department must be a string'),
    body('role')
      .notEmpty()
      .withMessage('Role is required')
      .isString()
      .withMessage('Role must be a string'),
    body('startDate')
      .optional()
      .isDate()
      .withMessage('Start Date must be a valid date'),
    body('status')
      .notEmpty()
      .withMessage('Status is required')
      .isIn(['Active', 'Inactive'])
      .withMessage('Status must be either Active or Inactive'),
    body('certificateIssueDate')
      .optional()
      .isDate()
      .withMessage('Certificate Issue Date must be a valid date'),
  ];
};

const changeEmployeeStatusValidator = () => {
  return [
    body('status')
      .notEmpty()
      .withMessage('Status is required')
      .isIn(['Active', 'Inactive'])
      .withMessage('Status must be either Active or Inactive'),
  ];
};

export { employeeIdBodyValidator, employeeIdParamValidator, createEmployeeValidator, changeEmployeeStatusValidator };
