import { Application, NextFunction, Request, Response } from "express-serve-static-core";
import { Column, Connection, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, Repository } from "typeorm";
import { HabitatType } from "./HabitatType";
import { MassReading } from "./MassReading";
import { TempReading } from "./TempReading";
import { Routable } from "../route";

@Entity()
export class Habitat extends Routable {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 255,
        unique: true,
    })
    name: string;

    @ManyToOne(
        _type => HabitatType,
        ht => ht.habitats,
    )
    @JoinColumn({
        name: 'habitatTypeId',
        referencedColumnName: 'id',
    })
    habitatType: HabitatType;

    @OneToMany(
        _type => HabitatType,
        ht => ht.habitats,
    )
    tempReadings: TempReading[];

    @OneToMany(
        _type => HabitatType,
        ht => ht.habitats,
    )
    massReadings: MassReading[];

    @UpdateDateColumn()
    ts: Date;

    @CreateDateColumn()
    dt: Date;

    public static relations (): string[] {
        return ['massReadings', 'tempReadings', 'habitatType'];
    }

    public static route<T> (app: Application, root: string, connection: Connection) {
        const tempReadingRepo = connection.getRepository(TempReading);

        app.get(root + '/:id/tempReading', async (req, res, next) => {
            res.send(await tempReadingRepo.find({
                where: {
                    habitat: req.params.id,
                },
            }));
        });

        const massReadingRepo = connection.getRepository(MassReading);

        app.get(root + '/:id/massReading', async (req, res, next) => {
            res.send(await massReadingRepo.find({
                where: {
                    habitat: req.params.id,
                },
            }));
        })
    }

    // public static route (app: Application, connection: Connection): void {
    //     const root = '/habitat';
    //     const repo = connection.getRepository(HabitatType);

    //     app.get(root, async (req: Request, res: Response, next: NextFunction) => {
    //         res.send(await repo.find());
    //     });

    //     app.get(root + '/:id', async (req: Request, res: Response, next: NextFunction) => {
    //         res.send(await repo.findOne({ id: req.params.id }))
    //     });

    //     app.post(root, async (req: Request, res: Response, next: NextFunction) => {
    //         const {
    //             name,
    //         } = req.body;
    //         const create = repo.create({
    //             name,
    //         });
    //         res.send(await repo.save(create));
    //     });

    //     app.post(root + '/:id', async (req: Request, res: Response, next: NextFunction) => {
    //         const id = req.params.id;
    //         const find = await repo.findOne({ id });

    //         for (let key in req.body) {
    //             if (req.body.hasOwnProperty(key) && find.hasOwnProperty(key)) {
    //                 find[key] = req.body[key];
    //             }
    //         }

    //         res.send(await repo.save(find));
    //     });

    //     app.delete(root + '/:id', async (req: Request, res: Response, next: NextFunction) => {
    //         const id = req.params.id;
    //         const find = await repo.findOne({ id });
    //         res.send(await repo.remove(find));
    //     });
    // }
}
