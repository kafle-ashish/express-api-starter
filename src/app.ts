import { Request, Response, json, urlencoded } from 'express';
import { createConnection } from 'mongoose';
import * as express from 'express';
import * as helmet from 'helmet';
import * as cors from 'cors';
// import buildEsellApp from './apps';
import * as morgan from 'morgan';
/* Setup app and port */
const PORT = process.env.PORT || 3000;
const app = express();

/* Connect to database */
const conn = createConnection(process.env.ESELL_URI || '', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
/* JSON middleware for REST apis. */
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());
app.use(json({ limit: '50mb' }));
app.use(
    urlencoded({
        limit: '50mb',
        extended: true,
        parameterLimit: 1000000,
    }),
);
// buildEsellApp(app, conn);

/* Error Handlers */
app.use((_: Request, res: Response) => {
    return res.status(400).json({
        error: 'Not found!',
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});