import * as React from 'react';
import { VehicleSummaryPayload } from '../../types/api';
import { CoreComponent } from '../../types/components';

export interface vehicleModalProps extends CoreComponent, VehicleSummaryPayload {
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>
}
