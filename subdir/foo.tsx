// This file will trigger the no-multi-comp rule if it's oxlint >=1.43.0.
const ComponentOne = () => <div>A</div>;
const ComponentTwo = () => <div>B</div>;

// this triggers typescript/no-inferrable-types:
const a: number = 5;

export { ComponentOne, ComponentTwo };

// This triggers no-constant-binary-expression as a warning, despite that rule not being enabled!:
if (a === {}) {
  console.log("foo");
}

// no-constant-binary-expression is a correctness eslint rule, and so is a default rule. But with `correctness` set to off, this _should_ be disabled, right?
