# notes95 Project Plan

## Commit 0: Documentation Scaffold

Target commit message:

`[DOCS] Initial README and project plan for notes95`

Scope:

- Create the initial project folder structure.
- Add README documentation describing the app concept, resource, routes, and testing strategy.
- Add this project plan.
- Add a basic `.gitignore`.
- Add a placeholder GitHub Actions workflow.
- Leave source, test, and config placeholders blank.

## Planned Development Sequence

1. Write failing unit tests for note validation helpers.
2. Implement the minimum note utility code needed to pass unit tests.
3. Refactor note utility code after tests pass.
4. Write failing integration tests for the notes REST API.
5. Implement Express route, controller, and in-memory store behavior.
6. Refactor backend code while keeping tests green.
7. Write failing Playwright system tests for create, update, and delete user stories.
8. Implement the React95 frontend to satisfy the system tests.
9. Refactor frontend code while keeping the full suite green.
10. Add screenshots of unit, integration, system, and full test runs.
11. Finalize deployment details and update the live URL.

## TDD Workflow

Each feature will follow Red-Green-Refactor:

- Red: write a failing test that describes the desired behavior.
- Green: write the smallest implementation that passes the test.
- Refactor: improve structure while preserving passing tests.

## Resource Model

Sticky notes will use the following planned fields:

- `id`
- `title`
- `content`
- `color`
- `x`
- `y`

## Testing Levels

- Unit tests: note validation helpers.
- Integration tests: Express API request-response behavior.
- System tests: browser workflows matching the three user stories.
