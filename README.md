# Zelt Live Coding

Welcome to the Zelt Live Coding test!

During this test, you will be asked to perform a number of coding tasks. Feel free to ask questions, test things out, and talk through your thought process. This exercise is designed to assess your coding skills in a realistic scenario that mirrors everyday development tasks, including reviewing and improving existing code.

## Instructions

1. **Setup**:
   - Load this project into your favorite code editor.
   - Install the package dependencies by running `npm install`.

2. **Running the Code**:
   - To run the code, use the `npm run start:v1` or `npm run start:v2` commands.

3. **Task**:
   - **Task 1: Code Review**
     - Review the provided code (version 1). 
     - Identify and document flaws, areas for improvement, and any potential bugs.
     - Understand the overall purpose of the code.

   - **Task 2: Code Improvement**
     - Based on your findings from the code review, create a newer, better version (version 2), incorporating all your learnings from the first task.
     - Make the code more efficient, less convoluted, and better structured.

4. **Code Review Focus Areas**:
   - Code readability and maintainability.
   - Error handling and edge cases.
   - Performance and efficiency.
   - Proper use of asynchronous functions.
   - Clean and modular design.

5. **Code Improvement Suggestions**:
   - Refactor the code to reduce complexity.
   - Ensure that functions have single responsibilities.
   - Improve error handling to be more robust.
   - Optimize any inefficient logic or data handling.
   - Make the code more modular and reusable.

6. **Screen Sharing**:
   - You will be asked to screen share your editor so we can see your work.
   - Talk through your thought process and explain the changes you are making.

## Provided Code Overview

- **main.ts**:
  - Entry point of the application. It calls the `enrichUsers` function with a sample `companyId` and `matchedUsers`.

- **enrichment.ts**:
  - Contains the logic for enriching user data.
  - Defines the `MatchedUser` interface and functions `enrichUsers` and `enrichUser`.
  - Includes helper functions for data conversion and updating user information.

- **mock/users.ts**:
  - Mock implementation of user-related service methods (`getUser`, `getUserAddress`, `updateUser`).
  - Provides mock user data and user address data.

- **mock/integration.ts**:
  - Mock implementation of an external integration service method (`getExternalEmployees`).
  - Provides mock external employee data.

***

Feel free to explore the code and get familiar with it before the live coding session.

Good luck and happy coding!

***

<em>Last updated: July 9, 2025</em>