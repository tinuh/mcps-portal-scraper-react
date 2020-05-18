import React from 'react';
import './App.css';

function Footer() {
  return (
    <div className="Footer">
      <footer className="py-4 bg-dark text-white-50 fixed-bottom">
        <div className="container text-center">
            <small>Copyright &copy; <a className="link" href="https://tinu.tech" target="blank">Tinu Vanapamula</a> *Not Affiliated with MCPS or Powerschool</small>
        </div>
      </footer>
    </div>
  );
}

export default Footer;