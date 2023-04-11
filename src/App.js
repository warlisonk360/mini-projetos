import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Menubar from './page/Sidebar';
import PagesManager from './components/PagesManager';
import Footer from './page/Footer';

function App() {
  return (
    <BrowserRouter>
      <Menubar />
      <PagesManager />
      <Footer />
    </BrowserRouter>    
  );
}

export default App;
