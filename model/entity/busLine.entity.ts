import { Stop } from "./stop.entity";

export class BusLine{
    public id?: number;
    public stops?: Stop[];
    public name?: string;
    public description?: string;
    public image?: string;
    public price?: number;
    public rate?: number;
    public rateCount?: number;
    public active?: boolean;
}