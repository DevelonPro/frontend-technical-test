import * as React from 'react';
import { CoreComponent } from '../../types/components';

export interface ImageProps extends CoreComponent {
    full: string,
    scalingPercentage?: number
    onClick?: React.ComponentProps<'div'>['onClick']
}
