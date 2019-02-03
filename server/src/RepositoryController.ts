import { NextFunction, Request, Response } from "express";
import { getRepository, Repository } from "typeorm";

export interface ControllerRouteConfig {
    method: 'get' | 'post' | 'delete',
    path: string,
    call: string,
}

export class RepositoryController {
    private repository: Repository<any>;
    private path: string;

    public constructor (c: any, path: string) {
        this.repository = getRepository(c);
        this.path = path;
    }

    routes (): ControllerRouteConfig[] {
        return [
            {
                method: "get",
                path: this.path,
                call: 'all',
            },
            {
                method: "get",
                path: this.path + "/:id",
                call: 'one',
            },
            {
                method: "post",
                path: this.path,
                call: 'save',
            },
            {
                method: "delete",
                path: this.path + "/:id",
                call: 'remove',
            },
        ];
    }

    async all(request: Request, response: Response, next: NextFunction) {
        return this.repository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.repository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.repository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let objectToRemove = await this.repository.findOne(request.params.id);
        await this.repository.remove(objectToRemove);
    }
}
