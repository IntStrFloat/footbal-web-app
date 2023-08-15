import './App.css';
import Layout from './components/Layout';
import Contacts from './pages/Contacts/Contacts';
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Calendar from './pages/Calendar/Calendar';
import {useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Table from './pages/Table/Table';

import { MongoClient } from 'mongodb';

export type Comand ={
  name: String,
  players: [String],
  goals: Number,
}
export type Match = {
  matchNumber: Number,
  teams: [String],
  players: {
    type: Map<String,String[]>,
    of: [String],
  },
  teamScores: {
    type: Map<String,Number>,
    of: Number,
  },
}
export type Player = {
  name: String,
  goals: Number,
  red: Number,
  yellow: Number,
}
function App() {
  const location = useLocation();

  useEffect(() => {
    // Получаем текущий путь
    const { pathname } = location;

    console.log(pathname.slice(1));
    // Устанавливаем класс фона, соответствующий текущему пути
    document.getElementById('root')!.className = `page-${pathname.slice(1)}`;
  }, [location]);

  const homeData = fetch('https://jsonplaceholder.typicode.com/posts');
  return (
    <>
     <Routes>
        <Route path= "/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="stats" element={<Table />} />
       </Route>
     </Routes>
    </>
  );
}

export default App;