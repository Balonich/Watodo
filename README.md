## 1. Set Up the Project

- [x] Create the React project.
- [x] Clean up the boilerplate code.

## 2. Create Components

- [x] Define the `Todo` type.
- [x] Create `TodoItem` component.
- [x] Create `AddTodo` component.

## 3. Implement Basic Features

- [x] Manage state in `App`.
- [x] Implement adding tasks.
- [x] Implement displaying tasks.
- [x] Implement toggling task completion.
- [x] Implement removing tasks.
- [x] Implement editing tasks.
- [x] Implement cancel editing tasks.

## 4. Refactoring

- [x] Use Vite
- [x] Refactor App.jsx by creating more Components
- [x] Refactor AddTodo Component to remove direct DOM call
- [x] Refactor Components to utilize [Container/Presentational (Container/View) pattern](https://medium.com/@vitorbritto/react-design-patterns-the-container-presentational-pattern-775b91aa0c49)

## 5. External API Integration

- [x] Use `fetch` to get todos using API
- [x] Move API calls (direct usage of `fetch`) to a separate file, an abstraction layer for calls
- [x] Store base URL in settings config
- [x] Rewrite `fetch` to use [React Query](https://tanstack.com/query/latest)
- [x] Remove unnecessary containers the only purpose of which is to render view

## Potential Features

- [ ] Change emoji icons to png icons
- [ ] TodoItems drag-and-drop reorder ([Tutorial](https://www.youtube.com/watch?v=CJycVlSuaPg))

## Found Bugs

- [ ] Slightly visible white outline on input autofill
- [ ] Large text will be out of borders
