import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Trekking = forwardRef(
  ({ color = 'currentColor', size = 24 }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        color={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 8.5C7 9.5 6 12 6 12L8 13M18 10L15 11.5L11 8.5L10 14L13.5 17L14 21.5M18 10V8.5M18 10V21.5M10 17L8 21.5"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 6.5C13.1046 6.5 14 5.60457 14 4.5C14 3.39543 13.1046 2.5 12 2.5C10.8954 2.5 10 3.39543 10 4.5C10 5.60457 10.8954 6.5 12 6.5Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    );
  }
);

Trekking.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Trekking.displayName = 'Trekking';

export default Trekking;