import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is coded by <a href="https://thunderous-maamoul-e91194.netlify.app/" target="_blank" rel="noopener noreferrer">Mahsa Radinmehr</a> and is <a href="https://rodinmehr.github.io/" target="_blank" rel="noopener noreferrer">open-sourced on GitHub</a>
        </footer>
      </div>
    </div>
  );
}
