import authRouter from "./auth";
import indexRouter from ".";

const router = {
    auth: authRouter,
    index: indexRouter
};

export default router;