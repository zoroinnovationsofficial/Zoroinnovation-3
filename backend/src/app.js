import adminRoutes from "../src/routes/admin.routes.js";
import publicRoutes from "../src/routes/public.routes.js";
import authRoutes from "./routes/auth.routes.js";

import cookieParser from "cookie-parser";
import cors from "cors";
import express, { urlencoded } from "express";

import articleRouter from "./routes/article.routes.js";
import authorRoutes from "./routes/author.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import newsletterRoutes from "./routes/newsletter.routes.js";
import postRouter from "./routes/post.routes.js";

import adminTeamMemberRoutes from "./routes/adminTeamMemberRoutes.js";
import teamMemberRoutes from "./routes/teamMemberRoutes.js";

import employeeRoutes from "./routes/employeeVerify.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1", publicRoutes);
app.use("/api/v1", adminRoutes);
app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/articles", articleRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/authors", authorRoutes);
app.use("/api/v1/newsletter", newsletterRoutes);

app.use("/api/team-members", teamMemberRoutes);
app.use("/api/admin/team-members", adminTeamMemberRoutes);

app.use("/api/v1/employee", employeeRoutes);

export default app;
