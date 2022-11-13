import authRouter from "./auth";
import indexRouter from ".";
import uploadRouter from "./uploadRoute";

const router = {
    auth: authRouter,
    index: indexRouter,
    upload: uploadRouter
};

export default router;