import * as React from 'react';
import getData from './api';
import { storeInitContext } from './types/store';

const VehiclesContext = React.createContext<storeInitContext | null>(null);

const VehiclesProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [vehicles, setVehicles] = React.useState<storeInitContext['vehicles']>([]);
  const [loading, setLoading] = React.useState<storeInitContext['loading']>(true);
  const [error, setError] = React.useState<storeInitContext['error']>('');

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

  const value: storeInitContext = { vehicles, loading, error };

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
