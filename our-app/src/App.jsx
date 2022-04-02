import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Link to="/activities-list">Find Activities</Link>
      <Outlet />
    </div>
  );
}

export default App;
