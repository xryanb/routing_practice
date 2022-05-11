import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Number from './components/Number';
import Hello from './components/Hello';
import Custom from './components/Custom';


function App() {
  return (
    <div className="App">
      <h1>test</h1>
    {/* <Link to={'/home'}>home</Link>
    // <link to={/number}>Number */}

    <Routes>
      <Route path={'/home'} element={<Home/>}/>
      <Route path={'/:numbId'} element={<Number/>}/>
      {/* <Route path={'/:someWord'} element={<Hello/>}/> */}
      <Route path={'/:someWord/:firstColor/:secondColor'} element={<Custom/>}/>
    </Routes>
    </div>
  );
}

export default App;
