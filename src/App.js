import React from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./Routes/Private/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import { tasksReducer, TaskContext } from "./context/TaskContext";
import initialState from "./context/initialState";
import Tasks from "./components/Tasks";

function App() {
  const [state, dispatch] = React.useReducer(tasksReducer, initialState);
  return (
    <>
      <Router>
        <AuthProvider>
          <TaskContext.Provider
            value={{
              state,
              dispatch,
            }}
          >
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute exact path="/tasks" component={Tasks} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </TaskContext.Provider>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
