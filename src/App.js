import logo from './logo.svg';
import './App.css';
import Nevbar from './components/Navbar';
import Buttonn from './components/Buttonn';
// import Abouot from './components/Abouot';
import { useState } from 'react';
import ReactDOM from 'react-dom';  
// import { BrowserRouter as Router, Route,Link, NavLink, Switch } from 'react-router-dom'  

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";
// import Abouot from './components/abouot';
import About2 from './components/About2';

// import Nevbar from './components/Nevbar'; './components/Nevbar';

function App() {
  let [Text,setText] = useState(true);
  const turnary = (value) => {
    // (Text == false) ? true : false;
    setText(value);

    console.log('the text is ' + Text);
  };

  return (
  
  // <Router>

      <div className="first">
        <Nevbar name='Prit' turnary ={turnary}/>
        <Buttonn/>
        {/* <Routes> */}
          {/* <Route exact path='/' element={< App/>}></Route> */}
          {/* <Route exact path='/about' element={< About2 />}></Route>
          <Route exact path='/button' element={< Buttonn />}></Route>
        </Routes> */}


      </div>
  //  </Router>
  );
}

export default App;
