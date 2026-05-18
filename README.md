# notes95

> A lightweight sticky note application inspired by Windows 95 UI — built with Test-Driven Development.

## Live URL

To be added after deployment.

## App Description

notes95 is a single-resource CRUD web application that lets users create, update, and delete sticky notes displayed on a Windows 95-styled desktop canvas. Each note has a title, content body, and selectable background color: yellow, blue, green, or pink. Notes are draggable locally during a session. Built using React 19 with the React95 component library, backed by an Express 5 REST API. No database is required because data is stored in a server-side in-memory array, making it lightweight and zero-setup.

## User Stories

1. **Create** — As a user, I want to create a new sticky note on the desktop, so that I can quickly jot down a thought.
2. **Update** — As a user, I want to edit the title, content, and color of an existing note, so that I can keep my notes up to date.
3. **Delete** — As a user, I want to delete a note I no longer need, so that my desktop stays uncluttered.

## Tech Stack

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

## Main Resource

The main resource is a sticky note.

Each note will contain:

- `id`
- `title`
- `content`
- `color`
- `x`
- `y`

## Planned API Routes

- `GET /api/notes` — return all sticky notes
- `POST /api/notes` — create a new sticky note
- `PUT /api/notes/:id` — update an existing sticky note
- `DELETE /api/notes/:id` — delete a sticky note

## Testing Strategy

### Unit Testing

Unit tests will focus on isolated note-related logic. These tests will verify that the note title is required, the note content meets a minimum length, and the selected note color is allowed.

Planned unit tests:

- `validateNote()` should return an error when the title is empty.
- `validateNote()` should return an error when the content is shorter than the minimum length.
- `isAllowedColor()` should return true only for yellow, blue, green, and pink.

### Integration Testing

Integration tests will check complete HTTP request-response cycles between the Express routes, controller logic, validation logic, and in-memory data store.

Planned integration tests:

- `POST /api/notes` should create a sticky note and return status code 201.
- `GET /api/notes` should return all saved sticky notes and return status code 200.

### System/E2E Testing

System tests will simulate real user behavior in a browser using Playwright. Each system test will match one user story.

Planned system tests:

- User Story 1: A user can create a sticky note.
- User Story 2: A user can update a sticky note.
- User Story 3: A user can delete a sticky note.

## Setup Instructions

Setup instructions will be completed as the project is implemented.
