import { VehicleSummaryPayload } from './api';

export interface StoreInitContext {
    loading: boolean;
    error: string;
    vehicles: VehicleSummaryPayload[]
}
