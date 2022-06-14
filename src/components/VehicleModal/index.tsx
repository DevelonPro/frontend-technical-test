import classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import VehicleItem from '../VehicleItem';
import { vehicleModalProps } from './types';
import './style.scss';
import VehicleMeta from '../VehicleMeta';

const VehicleModal: React.FC<vehicleModalProps> = ({
  className = null,
  id,
  modelYear,
  media,
  additionalInfo,
  setModalOpen
}) => {
  const {
    meta: {
      passengers,
      drivetrain,
      bodystyles,
      emissions
    }
  } = additionalInfo;

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = null;
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={classNames('vehicleModal', className)}>
      <div className="vehicleModal__height">
        <div className="vehicleModal__inner">
          <div className="vehicleModal__close" onClick={() => setModalOpen(false)}>
            <i className="fa-solid fa-xmark" />
          </div>
          <VehicleItem
            className="vehicleModal__item"
            disableMobileView
            disableClick
            id={id}
            modelYear={modelYear}
            media={media}
            additionalInfo={additionalInfo}
          />
          <VehicleMeta
            className="vehicleModal__meta"
            passengers={passengers}
            drivetrain={drivetrain}
            bodystyles={bodystyles}
            emissions={emissions}
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default VehicleModal;
