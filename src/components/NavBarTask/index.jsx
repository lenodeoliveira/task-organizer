import React, { useState } from 'react';
import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router-dom"
import './navBar.css';
import { Navbar, Form, FormControl, Nav, Button } from 'react-bootstrap';

export default function NavBarTask() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
  
    async function handleLogout() {
      setError("")
  
      try {
        await logout()
        history.push("/signin")
      } catch {
        setError("Failed to log out")
      }
    }

    const handleClickAdd = ({ target: {name} }) => {
     console.log(typeof name)

      history.push(`/${name}`);
    };
    const handleClickHome = () => {
      history.push("/");
    } 

    return (
        <Navbar bg="light" variant="light" expand="lg" className="navbar">
          <Navbar.Brand href="#user">{currentUser.email}</Navbar.Brand>
           <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
             <Nav.Link name="/" onClick={handleClickHome}>Home</Nav.Link>
              <Nav.Link name="tasks" onClick={handleClickAdd}>Adicionar tarefa</Nav.Link>
              {error && <p>{error}</p>}
              </Nav>

          <Form inline>
           <FormControl type="text" placeholder="Search" className="mr-sm-2" />
             <Button variant="outline-success">Search</Button>{'  '}
            </Form>

            <Button  className="logout" variant="outline-primary" onClick={handleLogout}>
              Log Out
            </Button>
            </Navbar.Collapse>
          </Navbar>
      );
}