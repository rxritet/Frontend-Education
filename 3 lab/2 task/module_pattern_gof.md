# Module Pattern — GoF Style Documentation

**Student:** Radmir Abraev  
**Date:** 2026-02-25  
**Reference:** Osmani, Ch. 3 "Writing a Pattern"; Ch. 7 "The Module Pattern"

---

## Pattern Name
**Module Pattern**

---

## Description
The Module Pattern provides a way to encapsulate private state and behavior
inside a function scope, exposing only a controlled public API. It prevents
global namespace pollution and enforces separation between internal
implementation and external interface.

---

## Context Outline
Effective in the following contexts:
- Large JavaScript applications where multiple developers share a global scope
- Browser environments without a native module system (pre-ES6)
- Libraries and plugins that must not leak internal variables
- Code that needs a clear public API contract separate from implementation details

---

## Problem Statement
JavaScript has no native access modifiers (`private`, `public`). Without
encapsulation, all variables declared at the top level become properties of
the global `window` object, causing naming collisions, unpredictable state
mutations, and tight coupling between modules.

---

## Solution
1. Wrap all code in an **Immediately Invoked Function Expression (IIFE)**
2. Declare private variables and functions inside the IIFE's function scope
3. Return a plain object containing only the members that should be public
4. Assign the returned object to a variable — this becomes the module's interface
5. External code interacts only with the returned object; private members remain inaccessible

---

## Design
- **Private scope:** function closure holds private state
- **Public API:** the returned object literal
- **Single instance:** IIFE executes once, making the module a de-facto Singleton
- **Zero dependencies:** standard JavaScript, no framework needed

---

## Implementation

```js
// Basic Module Pattern using IIFE
const counterModule = (() => {
  // Private state — not accessible from outside
  let count = 0;

  // Private helper function
  const log = (msg) => console.log(`[Counter] ${msg}`);

  // Public API — only these methods are exposed
  return {
    increment() {
      count += 1;
      log(`incremented to ${count}`);
    },
    decrement() {
      count -= 1;
      log(`decremented to ${count}`);
    },
    getCount() {
      return count;
    },
    reset() {
      count = 0;
      log("reset");
    },
  };
})();
