import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Habitat } from "./Habitat";

@Entity()
export class MassReading {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('double precision')
    value: number;

    @ManyToOne(
        _type => Habitat,
        ht => ht.massReadings,
    )
    habitat: Habitat;

    @Column({
        default: () => 'current_timestamp',
    })
    dt: Date;
}
