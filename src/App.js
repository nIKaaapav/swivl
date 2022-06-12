import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import action from './redux/usersState/actions'
import AppRouter from "./routers";


function App() {
  return (
    <div>
      <AppRouter/>
    </div>
  );
}

export default App;
