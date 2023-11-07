import './App.css'
import NavBar from './components/NavBar';
import Header from './components/Header';
import Layout from './components/Layout';
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <main>
        <Header />
        <Layout>
          <NavBar />  {/* place to the left, should appear on all admin screens */}
          <Outlet/>
        </Layout>
    </main>
  )
}

export default App
