import { useState } from 'react';
import data from './data';
import List from './components/List';

const App = () => {
  const [people, setPeople] = useState(data)

  return (
    <main>
      <section className='container'>
        <h3>{data.length} Birthdays Today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])} className='btn'>Clear List</button>
      </section>
    </main>
  );
};
export default App;
