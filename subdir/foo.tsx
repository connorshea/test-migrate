// This file will trigger the no-multi-comp rule.
const ComponentOne = () => <div>A</div>;
const ComponentTwo = () => <div>B</div>;

// This triggers typescript/no-inferrable-type.
// It also triggers typescript/no-unused-vars, despite that rule not being enabled in any way?
const a: number = 5;

export { ComponentOne, ComponentTwo };
