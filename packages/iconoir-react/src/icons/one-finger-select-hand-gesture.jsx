import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const OneFingerSelectHandGesture = forwardRef(
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
            d="M7.5 12V3.5C7.5 2.67157 8.17157 2 9 2V2C9.82843 2 10.5 2.67056 10.5 3.49899C10.5 4.68968 10.5 6.34156 10.5 7.5M7.5 12V15M7.5 12L5.49591 14.6721C4.91845 15.4421 4.97127 16.5141 5.6216 17.2236L9.4055 21.3514C9.78431 21.7647 10.3183 22 10.8789 22C11.9651 22 13.7415 22 15.5 22C17.9 22 19.5 20 19.5 18C19.5 18 19.5 18 19.5 18C19.5 18 19.5 11.1429 19.5 9.42857C19.5 7.14286 16.5 7.14286 16.5 9.42857M10.5 10C10.5 10 10.5 8.61578 10.5 7.5M10.5 7.5C10.5 5.21429 13.5 5.21429 13.5 7.5C13.5 7.5 13.5 7.5 13.5 7.5C13.5 7.5 13.5 8.06256 13.5 8.28571M13.5 10C13.5 10 13.5 9.17834 13.5 8.28571M16.5 10C16.5 10 16.5 9.87489 16.5 9.42857M16.5 9.42857C16.5 9.20541 16.5 8.50887 16.5 8.28571C16.5 6 13.5 6 13.5 8.28571"
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

OneFingerSelectHandGesture.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

OneFingerSelectHandGesture.displayName = 'OneFingerSelectHandGesture';

export default OneFingerSelectHandGesture;