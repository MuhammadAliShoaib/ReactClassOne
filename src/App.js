import logo from './logo.svg';
import './App.css';

function App() {

  let students = [
    {
      name: 'Ali',
      age: 21,
      city: 'Karachi'
    },

    {
      name: 'Ahmed',
      age: 20,
      city: 'Lahore'
    },

    {
      name: 'Bilal',
      age: 19,
      city: 'Islamabad'
    },

    {
      name: 'Saad',
      age: 22,
      city: 'Toronto'
    },

    {
      name: 'Zain',
      age: 18,
      city: 'Quetta'
    }
  ]


  return (
    <div className="App">
      <header className="App-header">
        {
          students.map((x, i) => {
            return (
              <div className='students'>
                <h3>Sno.{i + 1} : {x.name}</h3>
                <p>{x.age}</p>
                <p>{x.city}</p>
              </div>
            )
          })
        }

      </header>
    </div>
  );
}

export default App;
