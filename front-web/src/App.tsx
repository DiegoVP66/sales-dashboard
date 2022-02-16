import './App.css';
import Header from './components/header';
import Filter from './components/header/filter';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
      </div>
    </>
  );
}

export default App;
