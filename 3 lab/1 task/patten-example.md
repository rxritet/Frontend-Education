
***

### `Lab03/task1/pattern-example.js`

```js
// pattern-example.js
// Demonstrates the Form Validator Pattern in action
// Reference: Osmani Ch. 3, "Examples" section of pattern structure

/**
 * Core validator — accepts data and rules, returns validation result.
 * @param {Object} data
 * @param {Object} rules
 * @returns {{ valid: boolean, errors: Object }}
 */
function validateForm(data, rules) {
  const errors = {};

  for (const field in rules) {
    const value = data[field];
    const fieldRules = rules[field];

    if (fieldRules.required && !value) {
      errors[field] = `${field} is required`;
      continue;
    }

    if (fieldRules.minLength && value && value.length < fieldRules.minLength) {
      errors[field] = `${field} must be at least ${fieldRules.minLength} characters`;
    }

    if (fieldRules.pattern && value && !fieldRules.pattern.test(value)) {
      errors[field] = `${field} has invalid format`;
    }
  }

  return { valid: Object.keys(errors).length === 0, errors };
}

// --- Usage Example 1: Registration Form ---

const registrationRules = {
  username: { required: true, minLength: 3 },
  email:    { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  password: { required: true, minLength: 8 },
};

const validData = {
  username: "radmir",
  email: "radmir@example.com",
  password: "securepass123",
};

const invalidData = {
  username: "r",       // too short
  email: "not-an-email",
  password: "",        // required, missing
};

console.log("Valid data result:", validateForm(validData, registrationRules));
// { valid: true, errors: {} }

console.log("Invalid data result:", validateForm(invalidData, registrationRules));
// { valid: false, errors: { username: '...', email: '...', password: '...' } }

// --- Usage Example 2: Reusing rules for a login form ---

const loginRules = {
  email:    { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  password: { required: true, minLength: 8 },
};

const loginData = { email: "radmir@example.com", password: "pass" };
console.log("Login result:", validateForm(loginData, loginRules));
// { valid: false, errors: { password: 'password must be at least 8 characters' } }
