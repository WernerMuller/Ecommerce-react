import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './Styles/Master.scss';
import Header from './Components/Header';
import {userRoutes} from './routes/AllRoutes';


function App() {
  return (
    <div className="App">

      <Router>

        <Header />
        <div className='Main'>
        <Routes>
          {userRoutes.map(route => 
            <Route key={route.path} path={route.path} element={route.component} />
          )}
      </Routes>
        </div>
      </Router>
               

    </div>
  );
}

export default App;
