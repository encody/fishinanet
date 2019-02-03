import * as bodyParser from "body-parser";
import * as express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Habitat } from "./entity/Habitat";
import { HabitatType } from "./entity/HabitatType";
import { MassReading } from "./entity/MassReading";
import { TempReading } from "./entity/TempReading";
import { User } from "./entity/User";
import { DefaultRepositoryEndpointController } from "./RepositoryController";
import * as cors from 'cors';
import * as crypto from 'crypto';
import * as cookieParser from 'cookie-parser';
import { hashPasswordAndSalt } from "./hash";

const sessionCookie = 'fishina-session';

createConnection().then(async connection => {
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use(cookieParser());

    const sessions: Map<string, {
        userId: number,
        expires: number,
    }> = new Map();

    const userRepo = connection.getRepository(User);

    userRepo.create({

    })

    app.post('/login', async (req: express.Request, res: express.Response) => {
        const user = await userRepo.findOne({
            userName: req.body.userName,
        });

        if (user) {
            const hashed = hashPasswordAndSalt(
                req.body.pass,
                user.salt,
            );

            if (Buffer.compare(user.pass, hashed) === 0) {
                const key = crypto.randomBytes(32).toString('hex');
                sessions.set(key, {
                    userId: user.id,
                    // Expire session in 3 hours
                    expires: Date.now() + 1000 * 60 * 60 * 3,
                });
                res.cookie(sessionCookie, key).send(true);
                return;
            }
        }

        res.clearCookie(sessionCookie).send(false);
    });

    app.all('/logout', async (req: express.Request, res: express.Response) => {
        res.clearCookie(sessionCookie).send(true);
    });

    // Verify login session
    app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
        console.log(req.cookies);
        next();
    });

    const entities: {schema: any, path: string}[] = [
        { schema: User,          path: '/user',          },
        { schema: Habitat,       path: '/habitat',       },
        { schema: HabitatType,   path: '/habitatType',   },
        { schema: MassReading,   path: '/massReading',   },
        { schema: TempReading,   path: '/tempReading',   },
    ];

    entities.forEach(entity => {
        const controller =
            new DefaultRepositoryEndpointController(entity.schema, entity.path);

        controller.routes().forEach(routeConfig => {
            app[routeConfig.method](routeConfig.path, async (req, res, next) => {
                res.send(await controller[routeConfig.call](req, res, next));
            });
        })
    });

    app.listen(3000);

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
