import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Habitat } from "./Habitat";

@Entity()
export class TempReading {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('double precision')
    value: number;

    @ManyToOne(
        _type => Habitat,
        ht => ht.tempReadings,
    )
    habitat: Habitat;

    @Column({
        default: () => 'current_timestamp',
    })
    dt: Date;
}
