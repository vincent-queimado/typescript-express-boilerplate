import { Router } from 'express';
import defaultRoute from './default.route';

const router = Router();

const defaultRoutes = [
    {
        path: '/',
        route: defaultRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
