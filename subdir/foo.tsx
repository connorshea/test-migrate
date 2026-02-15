import React from 'react';

// This will trigger the no-multi-comp rule in ESLint and Oxlint if things are working correctly.
const ComponentOne = () => {
  return (
    <div>
      <h1>Component One</h1>
      <p>This is the first dummy component.</p>
    </div>
  );
};

const ComponentTwo = () => {
  return (
    <div>
      <h1>Component Two</h1>
      <p>This is the second dummy component.</p>
    </div>
  );
};

export { ComponentOne, ComponentTwo };
