import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import { useStateValue } from './StateProvider';
import Login from './Login';

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar name={user.displayName} avatar={user.photoURL} email={user.email} />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
