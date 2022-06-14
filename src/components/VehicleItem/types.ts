import { VehicleSummaryPayload } from "../../types/api";
import { CoreComponent } from "../../types/components";

export interface VehicleItemProps extends CoreComponent, VehicleSummaryPayload {
    disableMobileView?: boolean,
    disableClick?: boolean
}
