import adminRoutes from './routes/admin.routes.js';
import publicRoutes from './routes/public.routes.js';

import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { urlencoded } from 'express';

import articleRouter from './routes/article.routes.js';
import authRoutes from './routes/auth.routes.js';
import authorRoutes from './routes/author.routes.js';
import categoryRoutes from './routes/category.routes.js';
import newsletterRoutes from './routes/newsletter.routes.js';
import postRouter from './routes/post.routes.js';
import projectRoutes from './routes/project.routes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import adminTeamMemberRoutes from './routes/adminTeamMemberRoutes.js';
import teamMemberRoutes from './routes/teamMemberRoutes.js';

import employeeRoutes from './routes/employeeVerify.routes.js';
import jobRoutes from './routes/job.routes.js';


const app = express();

// --- START: Updated CORS Configuration ---

const allowedOrigins = [
  process.env.CLIENT_URL,
  'https://zoroinnovations-virid.vercel.app',
  /^https:\/\/.*-rajathravikumar2205-gmailcoms-projects\.vercel\.app$/,
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:8000',
  'http://localhost:3000',
  'http://localhost:3001',
];

// CORS configuration with more explicit options
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      // Check if origin is in allowed list
      const isAllowed = allowedOrigins.some(allowedOrigin => {
        if (typeof allowedOrigin === 'string') {
          return allowedOrigin === origin;
        } else if (allowedOrigin instanceof RegExp) {
          return allowedOrigin.test(origin);
        }
        return false;
      });

      if (isAllowed) {
        callback(null, true);
      } else {
        console.log('CORS blocked origin:', origin);
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  }),
);

// --- END: Updated CORS Configuration ---


app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/v1', publicRoutes);
app.use('/api/v1', jobRoutes);
app.use('/api/v1', adminRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/articles', articleRouter);
app.use('/api/v1/posts', postRouter);
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/authors', authorRoutes);
app.use('/api/v1/newsletter', newsletterRoutes);
app.use('/api/v1/projects', projectRoutes);
app.use("/api/v1/upload", uploadRoutes);
app.use('/api/team-members', teamMemberRoutes);
app.use('/api/admin/team-members', adminTeamMemberRoutes);

app.use('/api/v1/employee', employeeRoutes);



export default app;
