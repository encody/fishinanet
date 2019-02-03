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
    pass: Buffer;

    @Column({
        type: 'varbinary',
        length: 32,
    })
    salt: Buffer;

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
