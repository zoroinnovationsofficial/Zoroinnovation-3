import express from 'express';

import {
  createEmployeeValidator,
  employeeIdBodyValidator,
  employeeIdParamValidator,
} from '../validators/employeeVerify.validators.js';
import {
  changeEmployeeStatus,
  createEmployee,
  deleteEmployee,
  editEmployeeData,
  employeeVerificationController,
  getAllEmployees,
  getEmployeeById,
} from '../controllers/employeeVerification.controller.js';
import {
  authMiddleware,
  checkAdminRole,
} from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validator.middleware.js';

const router = express.Router();

router
  .route('/verify-employee-id')
  .post(
    employeeIdBodyValidator(),
    validate,
    // authMiddleware,
    // checkAdminRole,
    employeeVerificationController,
  );
  

router
  .route('/create-employee')
  .post(
    createEmployeeValidator(),
    validate,
    createEmployee,
  );

router
  .route('/edit-employee/:employeeId')
  .put(
    employeeIdParamValidator(),
    validate,
    editEmployeeData,
  );

router
  .route('/get-employee/:employeeId')
  .get(
    employeeIdParamValidator(),
    validate,
    getEmployeeById,
  );

router.route('/getemployees').get(getAllEmployees);
router
  .route('/delete-employee/:employeeId')
  .delete(
    employeeIdParamValidator(),
    validate,
    deleteEmployee,
  );

router
  .route('/change-employee-status/:employeeId')
  .put(
    employeeIdParamValidator(),
    validate,
    changeEmployeeStatus,
  );
export default router;
