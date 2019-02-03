import { Habitat } from './Habitat';

export interface MassReading {
    id: number;
    value: number;
    dt: Date;
    habitat?: Habitat;
}
