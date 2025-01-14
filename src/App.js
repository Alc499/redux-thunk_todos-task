import React from 'react';

import CurrentUser from './CurrentUser';
import TodoList from './TodoList';
import { getTodos } from './api';

getTodos()
  .then(todos => {
    console.log(todos);
  });

const todos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: true,
  },
  {
    userId: 2,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true,
  },
  {
    userId: 4,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: 'qui ullam ratione quibusdam voluptatem quia omnis',
    completed: false,
  },
];
const currentUser = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};

const App = () => (
  <main className="App">
    <section>
      <p className="info">
        Todos are not loaded yet
        <button type="button">Load</button>
      </p>

      <p className="info">User is not selected</p>
    </section>

    <section>
      <p className="info">Loading...</p>
      <p className="info">Loading...</p>
    </section>

    <section>
      <p className="info">
        Failed loading todos
        <button type="button">Reload</button>
      </p>

      <p className="info">
        Failed loading user
        <button type="button">Reload</button>
      </p>
    </section>

    <section>
      <p className="info">
        6 todos are loaded
        <button type="button">Clear</button>
      </p>

      <p className="info">
        User #1 is loaded
        <button type="button">Clear</button>
      </p>
    </section>

    <section>
      <p className="info">
        1 todo is loaded
        <button type="button">Clear</button>
      </p>

      <p className="info">User #999 does not exist</p>
    </section>

    <section>
      <div className="content">
        <div className="loader" />
      </div>
      <div className="content">
        <CurrentUser user={currentUser} />
      </div>
    </section>

    <section>
      <div className="content">
        <TodoList todos={todos} />
      </div>
      <div className="content">
        <div className="loader" />
      </div>
    </section>
  </main>
);

export default App;
