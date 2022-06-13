import { vehicleSummaryPayload } from './api';

export interface storeInitContext {
    loading: boolean;
    error: string;
    vehicles: Array<vehicleSummaryPayload>
}
