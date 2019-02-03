import { Habitat } from './Habitat';

export interface TempReading {
    id: number;
    value: number;
    dt: Date;
    habitat?: Habitat;
}
