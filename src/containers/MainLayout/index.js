import React from 'react';
import propTypes from 'prop-types';
import './MainLayout.scss';

const MainLayout = (props) => {
  const {
    children
  } = props;

  return (
    <div className="MainLayout">
      <header className="Header">
        <h1>Smash Reporter</h1>
      </header>
      <main>
        { children }
      </main>
      <footer className="Footer">
        <span>Edward Runkel<i>©2020</i></span>
      </footer>
    </div>
  );
};

const {
  node
} = propTypes;

MainLayout.propTypes = {
  children: node
};

export default MainLayout;
