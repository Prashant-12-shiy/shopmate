import './App.css';
import { AllRoutes } from './routes/AllRoutes';
import {Header} from "./components"

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <AllRoutes/>
      </main>
 
    </div>
  );
}

export default App;
