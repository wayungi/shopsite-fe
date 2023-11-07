import {useState} from 'react';
import './App.css'
import NavBar from './components/NavBar';
import Header from './components/Header';
import Layout from './components/Layout';
import { Outlet } from 'react-router-dom';



function App() {
  const [filterValue, setFilterValue] =  useState<string>('');
  return (
    <main>
        <Header setFilterValue={setFilterValue} />
        <Layout>
          <NavBar />  {/* placed to the left, should appear on all admin screens */}
          <Outlet context={filterValue}/>
        </Layout>
    </main>
  )
}

export default App
