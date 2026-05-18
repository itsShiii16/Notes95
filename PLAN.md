# Project Title

notes95

# Repository Name

notes95

# App Description

notes95 is a lightweight single-resource CRUD web application for managing sticky notes on a Windows 95-inspired desktop interface. Users will be able to create, edit, and delete sticky notes with a title, content body, and selectable color.

The project will be built using Test-Driven Development with a Red-Green-Refactor workflow. Development will begin with failing tests, continue with the smallest working implementation, and end with refactoring while keeping the test suite passing.

# Main Resource

The main resource is a sticky note.

Planned note fields:

- `id`
- `title`
- `content`
- `color`
- `x`
- `y`

# CRUD Features

- Create a new sticky note.
- Read and display all sticky notes.
- Update an existing sticky note's title, content, and color.
- Delete a sticky note.

# User Stories

1. Create - As a user, I want to create a new sticky note on the desktop, so that I can quickly jot down a thought.
2. Update - As a user, I want to edit the title, content, and color of an existing note, so that I can keep my notes up to date.
3. Delete - As a user, I want to delete a note I no longer need, so that my desktop stays uncluttered.

# Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19 + Vite |
| UI Library | React95 + styled-components |
| Backend | Express 5 |
| Data Store | In-memory array |
| Unit Testing | Jest |
| Integration Testing | Jest + Supertest |
| System/E2E Testing | Playwright |
| CI/CD | GitHub Actions |

# Testing Strategy

## Unit Testing

Unit tests will focus on isolated note-related logic.

Planned unit tests:

- `validateNote()` should return an error when the title is empty.
- `validateNote()` should return an error when the content is shorter than the minimum length.
- `isAllowedColor()` should return true only for yellow, blue, green, and pink.

## Integration Testing

Integration tests will verify complete HTTP request-response behavior for the Express API.

Planned integration tests:

- `POST /api/notes` should create a sticky note and return status code 201.
- `GET /api/notes` should return all saved sticky notes and return status code 200.

## System/E2E Testing

System tests will simulate user behavior in a browser using Playwright.

Planned system tests:

- A user can create a sticky note.
- A user can update a sticky note.
- A user can delete a sticky note.

# Planned Folder Structure

```text
notes95/
|-- backend/
|   |-- src/
|   |   |-- app.js
|   |   |-- server.js
|   |   |-- noteUtils.js
|   |   |-- notesStore.js
|   |   `-- notesController.js
|   `-- tests/
|       |-- unit/
|       |   `-- noteUtils.test.js
|       `-- integration/
|           `-- notesRoutes.test.js
|-- frontend/
|   |-- src/
|   |   |-- App.jsx
|   |   |-- main.jsx
|   |   |-- api.js
|   |   |-- components/
|   |   |   |-- Desktop.jsx
|   |   |   |-- StickyNote.jsx
|   |   |   |-- NoteForm.jsx
|   |   |   `-- Taskbar.jsx
|   |   `-- styles/
|   |       `-- index.css
|   |-- tests/
|   |   `-- system/
|   |       `-- notes95.spec.js
|   `-- playwright.config.js
|-- screenshots/
|-- .github/
|   `-- workflows/
|       `-- ci.yml
|-- PLAN.md
|-- README.md
`-- .gitignore
```

# TDD Commit Plan

1. `[DOCS] Initial README and project plan for notes95`
2. `[TEST] Add failing unit tests for note validation`
3. `[FEAT] Implement note validation helpers`
4. `[REFACTOR] Clean up note validation logic`
5. `[TEST] Add failing integration tests for notes API`
6. `[FEAT] Implement notes API CRUD behavior`
7. `[REFACTOR] Clean up backend route and store structure`
8. `[TEST] Add failing Playwright system tests`
9. `[FEAT] Implement React95 sticky notes UI`
10. `[REFACTOR] Clean up frontend components`
11. `[DOCS] Add test result screenshots and deployment notes`

# GitHub Actions Plan

The CI workflow will eventually run automated checks on push and pull request events.

Planned CI steps:

- Check out the repository.
- Install backend dependencies.
- Run backend unit tests.
- Run backend integration tests.
- Install frontend dependencies.
- Run frontend system tests.
- Report test results.

For Commit 0, the workflow remains a placeholder until dependencies and real test commands are added.

# Deployment Plan

Deployment will be completed after the app implementation is stable and tested.

Planned deployment tasks:

- Deploy the backend API to a compatible Node.js hosting service.
- Deploy the frontend static build to a static hosting service.
- Configure the frontend API base URL.
- Add the deployed live URL to `README.md`.

# Development Checklist

- [x] Create initial project scaffold.
- [x] Add README documentation.
- [x] Add project plan.
- [x] Add placeholder CI workflow.
- [ ] Add unit tests.
- [ ] Implement unit-tested helper functions.
- [ ] Add integration tests.
- [ ] Implement backend API.
- [ ] Add system tests.
- [ ] Implement frontend UI.
- [ ] Add screenshots.
- [ ] Deploy application.

# Defense Preparation Notes

Key points to explain during defense:

- The app is a single-resource CRUD application focused on sticky notes.
- The resource fields are intentionally simple and match the planned user stories.
- The project follows Red-Green-Refactor to demonstrate Test-Driven Development.
- Unit, integration, and system tests each cover a different level of confidence.
- The in-memory data store keeps the project lightweight and avoids database setup.
- GitHub Actions will be used to automate test execution.

# Final Goal Checklist

- [ ] All CRUD user stories are implemented.
- [ ] Unit tests pass.
- [ ] Integration tests pass.
- [ ] System tests pass.
- [ ] GitHub Actions workflow runs successfully.
- [ ] Screenshots are added for required test results.
- [ ] Live deployment URL is added.
- [ ] README and PLAN are updated with final project details.
