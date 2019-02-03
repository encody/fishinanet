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
import { hashPasswordAndSalt } from "./hash";

createConnection().then(async connection => {
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    const userRepo = connection.getRepository(User);

    // app.post('/login', (req: express.Request, res: express.Response) => {
    //     const user = userRepo.findOne({
    //         userName: req.body.userName,
    //         pass: hashPasswordAndSalt(req.body.pass),
    //     })
    // });

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
