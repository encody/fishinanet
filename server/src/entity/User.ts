import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 255,
    })
    userName: string;

    @Column({
        type: 'varbinary',
        length: 32,
    })
    pass: number;

    @Column({
        type: 'varbinary',
        length: 32,
    })
    salt: number;

    @Column({
        default: () => 'current_timestamp',
        onUpdate: 'current_timestamp',
    })
    ts: Date;

    @Column({
        default: () => 'current_timestamp',
    })
    dt: Date;
}
