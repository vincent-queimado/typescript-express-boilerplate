import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import favicon from 'serve-favicon';
import bodyParser from 'body-parser';
import express, { Request, Response, NextFunction } from 'express';

import xss from '@middlewares/xss/xss';
import rateLimit from '@middlewares/rate_limiter/rate_limiter';

import routes from '@routes/index';
import routesV1 from '@routes/v1';
import config from '@config/app';

import morgan from '@middlewares/morgan/morgan';
import handleError from '@middlewares/http_error_handler/error_handler';

const jsonLimit = '5mb';
const publicLogs = './logs';
const publicFavicon = './public/assets/images/favicons/favicon.ico';

export default () => {
    const app = express();

    app.use(helmet());

    app.use(xss());

    app.use(cors());
    app.options('*', cors());

    app.use(morgan.consoleLogger);
    app.use(morgan.fileLogger);

    app.use(bodyParser.json({ limit: jsonLimit }));
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(favicon(publicFavicon));

    app.use(`/${config.api.version}/logs`, express.static(publicLogs, { dotfiles: 'allow' }));

    app.use(`/${config.api.version}/auth`, rateLimit.limiter);

    app.use(`/${config.api.version}`, routesV1);

    app.use('/', routes);

    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../views'));

    app.get('*', (req: Request, res: Response, next: NextFunction) => {
        next();
    });

    app.use(handleError);

    return app;
};
