
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <h2>Aluga Santa Adélia</h2>
      <Outlet />
    </div>
  );
}

export default App;
