import React from 'react';

// This file will trigger the no-multi-comp rule in both ESLint and Oxlint.
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

// This triggers no-inferrable-type.
// It also triggers no-unused-vars, despite that rule not being enabled in any way?
const a: number = 5;

export { ComponentOne, ComponentTwo };
