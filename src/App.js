import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import About from './pages/About';
import User from './pages/User';
import {UserProvider} from './Context/UserContext';
import {AlertProvider} from './Context/AlertContext'
import Alert from './components/layout/Alert';

function App() {
  return (
    <UserProvider>
    <AlertProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="container mx-auto px-3 pb-12">
        <Alert />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/user/:login" element={<User />}></Route>
          <Route path="/*" element={<Notfound />}></Route>
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </AlertProvider>
    </UserProvider>
  );
}

export default App;
