import classNames from 'classnames';
import * as React from 'react';
import Image from '../Image';
import VehicleModal from '../VehicleModal';
import './style.scss';
import { VehicleItemProps } from './types';

const VehicleItem: React.FC<VehicleItemProps> = ({
  id,
  modelYear,
  media,
  additionalInfo,
  disableMobileView = false,
  disableClick = false,
  className = null
}) => {
  const { price, description } = additionalInfo;
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  return (
    <div id={`vehicle-${id}`} className={classNames('vehicleItem', className, disableMobileView && 'vehicleItem--disableMobileView')}>
      <div className="vehicleItem__inner">
        <Image
          className={classNames('vehicleItem__image', disableClick && 'vehicleItem__image--noClick')}
          full={media[0].url}
          scalingPercentage={70}
          onClick={disableClick ? undefined : () => setModalOpen(true)}
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
          {!disableClick && (
            <button type="button" onClick={() => setModalOpen(true)} className="vehicleItem__button">
              More information
            </button>
          )}
        </div>
      </div>
      {modalOpen && (
        <VehicleModal
          id={id}
          modelYear={modelYear}
          media={media}
          additionalInfo={additionalInfo}
          setModalOpen={setModalOpen}
        />
      )}
    </div>
  );
};

export default VehicleItem;
