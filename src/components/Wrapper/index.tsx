import * as React from 'react';
import { useVehicles } from '../../store';
import Error from '../Error';
import Loading from '../Loading';
import VehicleList from '../VehicleList';
import './style.scss';

const Wrapper: React.FC<React.ComponentProps<'div'>> = () => {
  const { loading, error } = useVehicles();
  let innerComponent: React.ReactElement;

  if (loading) {
    innerComponent = <Loading className="vehicleWrapper__loading" message="Loading vehicles..." />;
  } else if (error) {
    innerComponent = (
      <div className="vehicleWrapper__error">
        <Error message={error} />
      </div>
    );
  } else {
    innerComponent = <VehicleList />;
  }

  return (
    <div className="vehicleWrapper">
      {innerComponent}
    </div>
  );
};

export default Wrapper;
