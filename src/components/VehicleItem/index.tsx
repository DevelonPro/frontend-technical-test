import classNames from 'classnames';
import * as React from 'react';
import { vehicleSummaryPayload } from '../../types/api';
import { CoreComponent } from '../../types/components';
import Image from '../Image';
import './style.scss';

const VehicleItem: React.FC<vehicleSummaryPayload & CoreComponent> = ({
  id,
  modelYear,
  media,
  additionalInfo: { price, description },
  className = null
}) => {
  return (
    <div id={`vehicle-${id}`} className={classNames('vehicleItem', className)}>
      <div className="vehicleItem__inner">
        <Image
          className="vehicleItem__image"
          full={media[0].url}
          scalingPercentage={70}
        />
        <div className="vehicleItem__content">
          <h1 className="vehicleItem__header">
            {`${id.toUpperCase()} - ${modelYear.toUpperCase()}`}
          </h1>
          <div className="vehicleItem__priceDescription">
            <p className="vehicleItem__price">
              {`From ${price}`}
            </p>
            <p className="vehicleItem__description">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleItem;
