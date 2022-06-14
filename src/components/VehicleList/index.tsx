import classNames from 'classnames';
import * as React from 'react';
import { useVehicles } from '../../store';
import VehicleItem from '../VehicleItem';
import { CoreComponent } from '../../types/components';
import './style.scss';

const VehicleList: React.FC<CoreComponent> = ({ className = null }) => {
  const { vehicles } = useVehicles();

  return (
    <div className={classNames('vehicleList', className)}>
      <div className="vehicleList__row">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="vehicleList__item">
            <VehicleItem
              id={vehicle.id}
              modelYear={vehicle.modelYear}
              media={vehicle.media}
              additionalInfo={vehicle.additionalInfo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleList;
