import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import Navbar from './components/feature/Navbar';
import Footer from './components/feature/Footer';

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;