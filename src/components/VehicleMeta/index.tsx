import classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { VehicleMeta } from '../../types/api';
import { CoreComponent } from '../../types/components';
import './style.scss';

const VehicleMeta: React.FC<CoreComponent & VehicleMeta> = ({
  passengers,
  drivetrain,
  bodystyles,
  emissions: { value: emission },
  className = null
}) => {
  return (
    <div className={classNames('vehicleMeta', className)}>
      <div className="vehicleMeta__inner">
        <p className="vehicleMeta__passengers">
          {`Passengers: ${passengers}`}
        </p>
        <p className="vehicleMeta__drivetrain">
          {`Drivetrain: ${drivetrain.join(', ')}`}
        </p>
        <p className="vehicleMeta__bodystyles">
          {`Bodystyles: ${bodystyles.join(', ')}`}
        </p>
        <p className="vehicleMeta__emissions">
          {`Emissions: ${emission}`}
        </p>
      </div>
    </div>
  );
};

export default VehicleMeta;
