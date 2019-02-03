import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Habitat } from "./Habitat";

@Entity()
export class HabitatType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 255,
    })
    name: string;

    @OneToMany(
        _type => Habitat,
        ht => ht.habitatType,
    )
    habitats: Habitat[];
}
