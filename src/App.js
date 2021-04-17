import React from "react";
import PrivateRoute from "./Routes/Private/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { tasksReducer, TaskContext } from "./context/TaskContext";
import initialState from "./context/initialState";

import {
  SignIn,
  SignUp,
  Dashboard,
  ForgotPassword,
  Tasks,
  EditTasks,
} from "./components";

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
              <PrivateRoute exact path="/tasks/" component={Tasks} />
              <PrivateRoute exact path="/edit/:id" component={EditTasks} />
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
