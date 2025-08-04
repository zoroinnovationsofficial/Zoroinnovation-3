import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";

import teamMemberRoutes from "./routes/teamMemberRoutes.js";
import adminTeamMemberRoutes from "./routes/adminTeamMemberRoutes.js";

import employeeRoutes from "./routes/employeeVerify.routes.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);

app.use("/api/team-members", teamMemberRoutes);
app.use("/api/admin/team-members", adminTeamMemberRoutes);

app.use("/api/v1/employee", employeeRoutes);


export default app;
