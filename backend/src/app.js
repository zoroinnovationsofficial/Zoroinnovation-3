import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import articleRouter from "./routes/article.routes.js";
import postRouter from "./routes/post.routes.js";
import categoryRoutes from './routes/category.routes.js';
import authorRoutes from './routes/author.routes.js';
import newsletterRoutes from './routes/newsletter.routes.js';

const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/articles", articleRouter);
app.use("/api/v1/posts", postRouter);
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/authors', authorRoutes);
app.use('/api/v1/newsletter', newsletterRoutes);

export default app;
