// we import Link becuase we want to provide a navigation option for users to go back to the home page from the error component.
// This enhances user experience by allowing easy recovery from errors.

import { Link } from 'react-router-dom';

// we pass in error as a prop to display relevant error messages to the user.
// This helps users understand what went wrong and possibly how to fix it.
const Error = ({ error }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center bg-white rounded-lg shadow-lg p-8 max-w-md">

        // we use an SVG icon to visually indicate an error state.
        // fill,strike and viewBox are SVG attributes that define the appearance of the icon.
        <svg
          className="mx-auto w-16 h-16 text-red-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >

            {/* // we define the path of the SVG icon to create an exclamation mark inside a circle. */}
            {/* // strikeLinecap, strokeLinejoin, and strokeWidth are attributes that define the style of the lines in the SVG. */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4v2m0 6a9 9 0 110-18 9 9 0 010 18zm0-16a4 4 0 100 8 4 4 0 000-8z"
          />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
        <p className="text-gray-600 mb-6">
          {error?.message || 'An unexpected error occurred. Please try again later.'}
        </p>
        {/* // we use Link component to create a button that navigates back to the home page. */}
        <Link to="/" className="btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
