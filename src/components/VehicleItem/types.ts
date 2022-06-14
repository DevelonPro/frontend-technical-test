import { vehicleSummaryPayload } from "../../types/api";
import { CoreComponent } from "../../types/components";

export interface VehicleItemProps extends CoreComponent, vehicleSummaryPayload {
    disableMobileView?: boolean,
    disableClick?: boolean
}
