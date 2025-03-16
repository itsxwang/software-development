/*
  TypeScript Directives Explanation
*/
// 1. @ts-check - Enables TypeScript type checking in JavaScript files.
// Useful when working with JSDoc-based type checking in .js files.
// Without this, TypeScript might not check types in JavaScript files.
// It helps catch type-related errors in JavaScript files without converting them to TypeScript.
// Only applies to .js files, not .ts files (since TypeScript already checks them).
// See this video - https://youtu.be/kjyE9PJa7JE?si=JAte4V7GRkddoJvQ by `Chris Noring @chris_noring` , to see different ways to use this
// @ts-check
// const num1 : number = "hello"; // ❌ TypeScript will throw an error because `num1` should be a number.
// 2. @ts-expect-error - Suppresses the next line if it contains an error.
// TypeScript expects an error, and if there isn't one, TypeScript will show an error.`Unused '@ts-expect-error' directive.`
// @ts-expect-error
const num2 = "hello"; // ✅ No TypeScript error since we expect this to fail.
// If `const num2: number = 42`, TypeScript will throw an error because we expected an error(`Unused '@ts-expect-error' directive.`) but didn't get one.
// 3. @ts-ignore - Silences any TypeScript errors on the next line.
// Unlike @ts-expect-error, it does not verify whether an error exists.
// Use with caution because it hides real errors.
// @ts-ignore
const num3 = "hello"; // ❌ No TypeScript error, but this could be dangerous.
// 4. @ts-nocheck - Completely disables TypeScript checking for the entire file.
// Useful if you don’t want TypeScript to flag errors in a file (e.g., when migrating a large JavaScript project to TypeScript).
// @ts-nocheck
const num4 = "hello"; // No error, even if TypeScript checking is enabled.
export {};
/*
  🔥 When to Use Each One?
  | Directive         | Use Case |
  |-------------------|---------|
  | `@ts-check`       | Enable type checking in JavaScript files |
  | `@ts-expect-error` | Suppress an expected error and verify it exists |
  | `@ts-ignore`      | Ignore an error without verifying it exists (use with caution) |
  | `@ts-nocheck`     | Disable TypeScript checking for the whole file |
*/
