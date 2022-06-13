import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Wrapper from './components/Wrapper';
import { VehiclesProvider } from './store';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <div className="vehicleApp">
      <VehiclesProvider>
        <Wrapper />
      </VehiclesProvider>
    </div>
  </React.StrictMode>,
  document.querySelector('.root')
);
