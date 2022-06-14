export interface VehicleEmissions {
    template: string;
    value: number;
}

export interface VehicleMeta {
    passengers: number;
    drivetrain: string[];
    bodystyles: string[];
    emissions: VehicleEmissions;
}

export interface VehicleAdditionalInfo {
    id: number;
    description: string;
    price: string;
    meta: VehicleMeta;
}

export interface VehicleMedia {
    name: string;
    url: string;
}

export interface VehicleRawPayload {
    id: string;
    modelYear: string;
    apiUrl: string;
    media: [VehicleMedia, VehicleMedia];
}

export interface VehicleSummaryPayload extends Omit<VehicleRawPayload, 'apiUrl'> {
    additionalInfo: VehicleAdditionalInfo;
}

export interface Request {
    data: any;
    status: number;
}
