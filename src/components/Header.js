import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink exact to="/">Home</NavLink>
    <NavLink to="/create">Create Expense</NavLink>
    <NavLink to="/edit">Edit Expense</NavLink>
    <NavLink to="/help">Help</NavLink>  
  </header>
)

export default Header;