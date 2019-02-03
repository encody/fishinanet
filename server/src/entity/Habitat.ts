import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { HabitatType } from "./HabitatType";
import { TempReading } from "./TempReading";
import { MassReading } from "./MassReading";

@Entity()
export class Habitat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 255,
    })
    name: string;

    @ManyToOne(
        _type => HabitatType,
        ht => ht.habitats,
    )
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
