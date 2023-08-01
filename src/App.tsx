import './App.css';
import Layout from './components/Layout';
import Contacts from './pages/Contacts/Contacts';
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Calendar from './pages/Calendar/Calendar';
import Statistik from './pages/Statistik/Statistik';
function App() {
  return (
    <>
     <Routes>
        <Route path= "/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="stats" element={<Statistik />} />
       </Route>
     </Routes>
    </>
  );
}

export default App;