import * as React from 'react';
import { vehicleSummaryPayload } from '../../types/api';
import { CoreComponent } from '../../types/components';

export interface vehicleModalProps extends CoreComponent, vehicleSummaryPayload {
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>
}
