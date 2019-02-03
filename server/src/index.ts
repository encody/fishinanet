import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {User} from "./entity/User";
import { Habitat } from "./entity/Habitat";
import { RepositoryController } from "./RepositoryController";
import { HabitatType } from "./entity/HabitatType";
import { MassReading } from "./entity/MassReading";
import { TempReading } from "./entity/TempReading";

createConnection().then(async connection => {
    const app = express();
    app.use(bodyParser.json());

    const entities: {schema: any, path: string}[] = [
        { schema: User,          path: '/user',          },
        { schema: Habitat,       path: '/habitat',       },
        { schema: HabitatType,   path: '/habitatType',   },
        { schema: MassReading,   path: '/massReading',   },
        { schema: TempReading,   path: '/tempReading',   },
    ];

    entities.forEach(entity => {
        const controller =
            new RepositoryController(entity.schema, entity.path);

        controller.routes().forEach(routeConfig => {
            app[routeConfig.method](routeConfig.path, async (req, res, next) => {
                console.log('request');
                res.send(await controller[routeConfig.call](req, res, next));
            });
        })
    });

    app.listen(3000);

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
