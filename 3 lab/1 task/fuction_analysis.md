# Function Analysis — Form Validator Utility

**Student:** Radmir Abraev  
**Date:** 2026-02-25  
**Course:** JavaScript Design Patterns, Week 3

---

## Selected Utility Function

**Function:** `validateForm(data, rules)`  
**Source:** Personal project — SportHub registration form  
**Language:** JavaScript ES6+

```js
function validateForm(data, rules) {
  const errors = {};

  for (const field in rules) {
    const value = data[field];
    const fieldRules = rules[field];

    if (fieldRules.required && !value) {
      errors[field] = `${field} is required`;
      continue;
    }

    if (fieldRules.minLength && value.length < fieldRules.minLength) {
      errors[field] = `${field} must be at least ${fieldRules.minLength} characters`;
    }

    if (fieldRules.pattern && !fieldRules.pattern.test(value)) {
      errors[field] = `${field} has invalid format`;
    }
  }

  return Object.keys(errors).length === 0
    ? { valid: true, errors: {} }
    : { valid: false, errors };
}
