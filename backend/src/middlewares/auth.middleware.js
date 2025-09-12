import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';

const authMiddleware = async (req, res, next) => {
  try {
    // Priority 1: Check Authorization header for Bearer token
    let accessToken = req.headers.authorization?.replace('Bearer ', '');
    console.log('🔍 Auth middleware - Authorization header:', req.headers.authorization ? 'Present' : 'Missing');
    
    // Priority 2: Fall back to cookies if no Bearer token
    if (!accessToken) {
      accessToken = req.cookies?.accessToken;
      console.log('🔍 Auth middleware - Cookie token:', accessToken ? 'Present' : 'Missing');
    }

    if (!accessToken) {
      console.log('❌ Auth middleware - No access token found');
      return res.status(401).json({
        success: false,
        message: 'Access Token not found',
      });
    }

    console.log('✅ Auth middleware - Token found, verifying...');

    const decodeToken = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET,
    );
    if (!decodeToken) {
      console.log('❌ Auth middleware - Unable to decode token');
      return res.status(401).json({
        success: false,
        message: 'Unable to decode token',
      });
    }

    console.log('✅ Auth middleware - Token decoded successfully, userId:', decodeToken._id);
    req.userId = decodeToken._id;

    next();
  } catch (error) {
    console.error('Error in authMiddleware:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

const refreshAccessTokenMiddleware = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    console.log(refreshToken);
    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: 'Refresh Token not found',
      });
    }
    const decodeToken = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
    );

    if (!decodeToken) {
      return res.status(401).json({
        success: false,
        message: 'Unable to decode token',
      });
    }

    req.id = decodeToken._id;

    next();
  } catch (error) {
    console.error('Error in refreshAccessTokenMiddleware:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

const checkAdminRole = async (req, res, next) => {
  try {
    const userId = req.userId;
    console.log('🔍 Admin role check - userId:', userId);
    
    if (!userId) {
      console.log('❌ Admin role check - No userId found');
      return res.status(401).json({
        success: false,
        message: 'User ID not found',
      });
    }

    const user = await User.findById(userId).select('role');
    console.log('🔍 Admin role check - User found:', user ? `Role: ${user.role}` : 'Not found');
    
    if (!user) {
      console.log('❌ Admin role check - User not found in database');
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    if (user.role !== 'admin') {
      console.log('❌ Admin role check - User role is not admin:', user.role);
      return res.status(403).json({
        success: false,
        message: 'Access denied. Admins only.',
      });
    }
    
    console.log('✅ Admin role check - Access granted');
    next();
  } catch (error) {
    console.error('Error in checkAdminRole middleware:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

export { authMiddleware, refreshAccessTokenMiddleware, checkAdminRole };
