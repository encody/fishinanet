import { MassReading } from './MassReading';
import { TempReading } from './TempReading';
import { HabitatType } from './HabitatType';

export interface Habitat {
    id: number;
    name: string;
    fishVariety: string;
    averageSize: number;
    massReadings?: MassReading[],
    tempReadings?: TempReading[],
    habitatType?: HabitatType,
    ts: Date;
    dt: Date;
}
