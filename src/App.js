import './App.scss';
import Header from './components/header/header.component';
import ReposList from './components/repos-list/repos-list.component';

function App() {
  return (
    <div className="App">
      <Header />
      <ReposList />
    </div>
  );
}

export default App;
