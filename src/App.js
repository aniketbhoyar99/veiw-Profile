
import './App.css';
import ShowData from './Components/showData';
import { Route, Switch } from "react-router-dom";
import Profile from './Components/profile';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <ShowData />
        </Route>
        <Route exact path="/profile/:buildingNumber">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
