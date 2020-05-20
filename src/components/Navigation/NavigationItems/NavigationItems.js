//jshint esversion:10
import React from 'react';
import classes from './NavigationItems.css';
import NavItem from '../NavigationItems/NavigationItem/NavigationItem';

const navItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavItem link="/" exact>
      Burger Builder
    </NavItem>
    <NavItem link="/orders">Orders</NavItem>
  </ul>
);

export default navItems;
