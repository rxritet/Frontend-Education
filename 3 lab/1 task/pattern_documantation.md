
***

### `Lab03/task1/pattern-documentation.md`

```markdown
# Pattern Documentation — Form Validator Pattern

**Student:** Radmir Abraev  
**Date:** 2026-02-25  
**Reference:** Osmani, A. (2023). *Learning JavaScript Design Patterns*, 2nd Ed., Ch. 3

---

## Pattern Name
**Form Validator Pattern**

---

## Description
A utility pattern that separates form validation logic from UI components by
accepting a data object and a declarative rules configuration. Returns a
structured result object containing a validity flag and a field-keyed error map.

---

## Context Outline
This pattern is effective in the following contexts:

- Single-page applications where multiple forms share similar validation needs
- Projects using React, Vue, or other component frameworks where validation
  logic would otherwise be duplicated inside each component
- APIs or backend services that need to validate incoming JSON payloads
- Any environment where form rules change frequently and need to be updated
  in a single place (Ch. 3, "The Structure of a Design Pattern")

---

## Problem Statement
Form validation logic tends to be written inline — each component checks its own
fields with its own conditions. This leads to code duplication, inconsistency
between forms, and difficulty maintaining rules when requirements change.
The pattern addresses the question: how do we validate structured user input
in a reusable, configurable, and predictable way?

---

## Solution
1. Define a pure function `validateForm(data, rules)` that accepts two plain objects
2. Iterate over the `rules` object keys
3. For each key, retrieve the corresponding value from `data`
4. Apply each constraint (`required`, `minLength`, `pattern`, etc.) in sequence
5. Collect errors in a flat `errors` object, keyed by field name
6. Return `{ valid: boolean, errors: object }` regardless of outcome

This approach follows the principle that a solution should be "a description of
how the user's problem is solved in an understandable list of steps"
(Ch. 3, "The Structure of a Design Pattern").

---

## Design
- **Input:** `data` — plain object with field values; `rules` — plain object with constraint definitions
- **Output:** `{ valid: boolean, errors: Record<string, string> }`
- **Side effects:** none (pure function)
- **Dependencies:** none (no external libraries required)
- The rules configuration acts as a schema — it is defined once and reused across all forms

---

## Implementation

```js
/**
 * Validates a data object against a set of rules.
 * @param {Object} data   - Field values from the form
 * @param {Object} rules  - Constraint definitions per field
 * @returns {{ valid: boolean, errors: Object }}
 */
function validateForm(data, rules) {
  const errors = {};

  for (const field in rules) {
    const value = data[field];
    const fieldRules = rules[field];

    // Check required constraint first
    if (fieldRules.required && !value) {
      errors[field] = `${field} is required`;
      continue; // Skip remaining checks for this field
    }

    // Check minimum length
    if (fieldRules.minLength && value && value.length < fieldRules.minLength) {
      errors[field] = `${field} must be at least ${fieldRules.minLength} characters`;
    }

    // Check regex pattern
    if (fieldRules.pattern && value && !fieldRules.pattern.test(value)) {
      errors[field] = `${field} has invalid format`;
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
