import * as React from 'react';

import type { IconProps } from './types';

import { convertSvgIconToIcon } from '@/components/Icon';

const CountdownTimer = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M13.15 7.49998C13.15 4.66458 10.9402 1.84998 7.50002 1.84998C4.7217 1.84998 3.34851 3.90636 2.76336 4.99997H4.5C4.77614 4.99997 5 5.22383 5 5.49997C5 5.77611 4.77614 5.99997 4.5 5.99997H1.5C1.22386 5.99997 1 5.77611 1 5.49997V2.49997C1 2.22383 1.22386 1.99997 1.5 1.99997C1.77614 1.99997 2 2.22383 2 2.49997V4.31318C2.70453 3.07126 4.33406 0.849976 7.50002 0.849976C11.5628 0.849976 14.15 4.18537 14.15 7.49998C14.15 10.8146 11.5628 14.15 7.50002 14.15C5.55618 14.15 3.93778 13.3808 2.78548 12.2084C2.16852 11.5806 1.68668 10.839 1.35816 10.0407C1.25306 9.78536 1.37488 9.49315 1.63024 9.38806C1.8856 9.28296 2.17781 9.40478 2.2829 9.66014C2.56374 10.3425 2.97495 10.9745 3.4987 11.5074C4.47052 12.4963 5.83496 13.15 7.50002 13.15C10.9402 13.15 13.15 10.3354 13.15 7.49998ZM7 10V5.00001H8V10H7Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export const CountdownTimerIcon = convertSvgIconToIcon(CountdownTimer);
