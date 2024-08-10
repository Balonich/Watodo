function App() {
  return (
    <div class="container">
      <header>
        <h1>My Todo List</h1>
      </header>

      <section class="task-input">
        <input type="text" id="new-task" placeholder="Add a new task..." />
        <button id="add-task">Add</button>
      </section>

      <ul class="task-list">
        <li class="task-item">
          <input type="checkbox" class="checkbox" />
          <span class="task-text">Sample Task 1</span>
          <button class="edit-button">✏️</button>
          <button class="delete-button">🗑️</button>
        </li>
        <li class="task-item">
          <input type="checkbox" class="checkbox" />
          <span class="task-text">Sample Task 2</span>
          <button class="edit-button">✏️</button>
          <button class="delete-button">🗑️</button>
        </li>
      </ul>

      <footer>
        <span>You have X tasks remaining.</span>
      </footer>
    </div>
  );
}

export default App;
