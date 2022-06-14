import classNames from 'classnames';
import * as React from 'react';
import { LoadingProps } from './types';
import './style.scss';

const Loading: React.FC<LoadingProps> = ({ className = null, message = null }) => {
  return (
    <div className={classNames('loading', className)}>
      <div className="loading__spinner" />
      {message && (
        <div className="loading__message">
          {message}
        </div>
      )}
    </div>
  );
};

export default Loading;
