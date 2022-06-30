import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {
  return (
    <div className="container-principal">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
