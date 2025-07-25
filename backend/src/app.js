import cookieParser from 'cookie-parser';
import express, { urlencoded } from 'express';
import adminRoutes from '../src/routes/admin.routes.js';
import publicRoutes from '../src/routes/public.routes.js';

const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/v1', publicRoutes);
app.use('/api/v1', adminRoutes);

export default app;
