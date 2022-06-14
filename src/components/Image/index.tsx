import classNames from 'classnames';
import * as React from 'react';
import loadImage from '../../helpers/loadImage';
import Loading from '../Loading';
import './style.scss';
import { ImageProps } from './types';

const Image: React.FC<ImageProps> = ({
  full, scalingPercentage = null, className = null, onClick
}) => {
  const [imageFull, setImageFull] = React.useState<HTMLImageElement>(null);

  React.useEffect(() => {
    loadImage(full).then((img) => setImageFull(img));
  }, []);

  return (
    <div onClick={onClick} className={classNames('image', className)}>
      <div className="image__scaling" style={{ paddingBottom: scalingPercentage && `${scalingPercentage}%` }}>
        {!imageFull ? (
          <Loading className="image__loading" />
        ) : (
          <div
            className="image__img image__img--full"
            style={{ backgroundImage: `url(${imageFull.src})` }}
          />
        )}
      </div>
    </div>
  );
};

export default Image;
