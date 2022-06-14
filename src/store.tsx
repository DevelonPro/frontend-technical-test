import * as React from 'react';
import getData from './api';
import { StoreInitContext } from './types/store';

const VehiclesContext = React.createContext<StoreInitContext>(null);

const VehiclesProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [vehicles, setVehicles] = React.useState<StoreInitContext['vehicles']>([]);
  const [loading, setLoading] = React.useState<StoreInitContext['loading']>(true);
  const [error, setError] = React.useState<StoreInitContext['error']>('');

  React.useEffect(() => {
    if (vehicles.length) {
      setLoading(false);
      return;
    }

    (async () => {
      try {
        setVehicles(await getData());
      } catch (e) {
        setError(e.toString());
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const value: StoreInitContext = { vehicles, loading, error };

  return (
    <VehiclesContext.Provider value={value}>
      {children}
    </VehiclesContext.Provider>
  );
};

const useVehicles = () => {
  const context = React.useContext(VehiclesContext);
  if (context === undefined) {
    throw new Error('useVehicles must be used within a VehiclesProvider');
  }
  return context;
};

export { VehiclesProvider, useVehicles };
