import classNames from 'classnames';
import * as React from 'react';
import { CoreComponent } from '../../types/components';
import './style.scss';

const Loading: React.FC<CoreComponent> = ({ className = null }) => {
  return (
    <div className={classNames('loading', className)}>
      <div className="loading__inner" />
    </div>
  );
};

export default Loading;
