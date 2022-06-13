export interface vehicleEmissions {
    template: string;
    value: number;
}

export interface vehicleMeta {
    passengers: number;
    drivetrain: string[];
    bodystyles: string[];
    emissions: vehicleEmissions;
}

export interface vehicleAdditionalInfo {
    id: number;
    description: string;
    price: string;
    meta: vehicleMeta[];
}

export interface vehicleMedia {
    name: string;
    url: string;
}

export interface vehicleRawPayload {
    id: string;
    modelYear: string;
    apiUrl: string;
    media: [vehicleMedia, vehicleMedia];
}

export interface vehicleSummaryPayload extends Omit<vehicleRawPayload, 'apiUrl'> {
    additionalInfo: vehicleAdditionalInfo;
}

export interface request {
    data: any;
    status: number;
}
