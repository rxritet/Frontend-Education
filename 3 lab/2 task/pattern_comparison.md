# Pattern Comparison — Module Pattern and Related Patterns

**Student:** Radmir Abraev  
**Date:** 2026-02-25  
**References:** Osmani Ch. 3, Ch. 5, Ch. 7, Ch. 11

---

## Comparison Table

| Aspect | Module Pattern (IIFE) | Revealing Module | ES6 Modules | Namespace Pattern |
|---|---|---|---|---|
| **Privacy mechanism** | Closure (IIFE) | Closure (IIFE) | File scope (native) | Object nesting |
| **Syntax** | `(() => { return {} })()` | Same + explicit map | `import`/`export` | `MyApp.module = {}` |
| **Tool support** | None needed | None needed | Requires bundler or `type="module"` | None needed |
| **Testability** | Hard (private hidden) | Hard (private hidden) | Easy (import in test) | Easy (all public) |
| **Tree-shaking** | No | No | Yes (bundlers) | No |
| **Ch. reference** | Ch. 7 | Ch. 7 | Ch. 5 | Ch. 11 |

---

## When to Use Each

**Module Pattern (IIFE)**
- No build system available
- Legacy browser environments
- Small scripts that need encapsulation without bundling

**Revealing Module Pattern**
- Same as IIFE Module, but when a clearer, explicit public API is needed
- Prefer when reading the return object alone should document the full API

**ES6 Modules**
- All modern projects with Vite, Webpack, or Node.js
- When tree-shaking, lazy loading, or circular dependency resolution matters
- Default choice for any new React/Vue/Node project

**Namespace Pattern**
- When organizing many related utilities under a single global object
- Useful in environments without any module system (very old browsers, embedded scripts)

---

## Evolution of Module Pattern with Modern JavaScript

1. **2000s — IIFE Module:** Closures were the only privacy mechanism
2. **2009 — CommonJS (Node.js):** `require`/`module.exports` brought server-side modules
3. **2011 — AMD (RequireJS):** Async module loading for browsers
4. **2015 — ES6 Modules:** `import`/`export` became the language standard
5. **2017–present — Bundlers (Webpack, Rollup, Vite):** ES6 modules compiled for all environments

As Ch. 3 states: "Originality is not key in pattern design." ES6 modules did not
invent the concept — they standardized what the Module Pattern had already proven
in practice for over a decade.
