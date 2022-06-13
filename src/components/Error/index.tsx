import classNames from 'classnames';
import * as React from 'react';
import { CoreComponent } from '../../types/components';
import './style.scss';

const Error: React.FC<CoreComponent & {message: string}> = ({ className = null, message }) => {
  return (
    <div className={classNames('error', className)}>
      {message}
    </div>
  );
};

export default Error;
