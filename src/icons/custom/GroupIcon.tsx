import * as React from 'react';

import type { IconProps } from './types';

import { convertSvgIconToIcon } from '@/components/Icon';

const Group = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
        d="M1.44995 0.949951C1.31734 0.949951 1.19016 1.00263 1.0964 1.0964C1.00263 1.19017 0.949951 1.31735 0.949951 1.44995L0.949966 3.44995C0.949969 3.7261 1.17383 3.94995 1.44997 3.94995C1.72611 3.94995 1.94997 3.72609 1.94997 3.44995L1.94995 1.94995H3.44997C3.72611 1.94995 3.94997 1.72609 3.94997 1.44995C3.94997 1.17381 3.72611 0.949951 3.44997 0.949951H1.44995ZM5.94995 0.949951C5.67381 0.949951 5.44995 1.17381 5.44995 1.44995C5.44995 1.72609 5.67381 1.94995 5.94995 1.94995H8.94995C9.22609 1.94995 9.44995 1.72609 9.44995 1.44995C9.44995 1.17381 9.22609 0.949951 8.94995 0.949951H5.94995ZM5.44995 13.45C5.44995 13.1738 5.67381 12.95 5.94995 12.95H8.94995C9.22609 12.95 9.44995 13.1738 9.44995 13.45C9.44995 13.7261 9.22609 13.95 8.94995 13.95H5.94995C5.67381 13.95 5.44995 13.7261 5.44995 13.45ZM1.94995 5.94995C1.94995 5.67381 1.72609 5.44995 1.44995 5.44995C1.17381 5.44995 0.949951 5.67381 0.949951 5.94995V8.94995C0.949951 9.22609 1.17381 9.44995 1.44995 9.44995C1.72609 9.44995 1.94995 9.22609 1.94995 8.94995V5.94995ZM13.45 5.44995C13.7261 5.44995 13.95 5.67381 13.95 5.94995V8.94995C13.95 9.22609 13.7261 9.44995 13.45 9.44995C13.1738 9.44995 12.95 9.22609 12.95 8.94995V5.94995C12.95 5.67381 13.1738 5.44995 13.45 5.44995ZM11.45 0.949951C11.1738 0.949951 10.95 1.17381 10.95 1.44995C10.95 1.72609 11.1738 1.94995 11.45 1.94995H12.9499V3.44995C12.9499 3.72609 13.1738 3.94995 13.4499 3.94995C13.7261 3.94995 13.9499 3.72609 13.9499 3.44995V1.44995C13.9499 1.17381 13.7252 0.949951 13.449 0.949951H11.45ZM1.44995 10.95C1.72609 10.95 1.94995 11.1738 1.94995 11.45V12.95H3.44997C3.72611 12.95 3.94997 13.1738 3.94997 13.45C3.94997 13.7261 3.72611 13.95 3.44997 13.95H1.44995C1.17381 13.95 0.949951 13.7261 0.949951 13.45V11.45C0.949951 11.1738 1.17381 10.95 1.44995 10.95ZM13.95 11.45C13.95 11.1738 13.7261 10.95 13.45 10.95C13.1738 10.9499 12.95 11.1738 12.95 11.4499L12.9491 12.95H11.45C11.1738 12.95 10.95 13.1738 10.95 13.45C10.95 13.7261 11.1738 13.95 11.45 13.95H13.4499C13.7261 13.95 13.9499 13.7261 13.9499 13.45L13.95 11.45Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export const GroupIcon = convertSvgIconToIcon(Group);
