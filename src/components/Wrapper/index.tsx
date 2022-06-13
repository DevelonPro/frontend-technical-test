import * as React from 'react';
import { useVehicles } from '../../store';
import Error from '../Error';
import Loading from '../Loading';
import VehicleList from '../VehicleList';

const Wrapper: React.FC = () => {
  const { loading, error } = useVehicles();
  let innerComponent: React.ReactElement;

  if (loading) {
    innerComponent = <Loading />;
  } else if (error) {
    innerComponent = <Error message={error} />;
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
