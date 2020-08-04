/* eslint-disable react/react-in-jsx-scope */

import { Component } from 'react';
import DemosHome from '../src/components/DemosHome';
import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';

class index extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <DemosHome></DemosHome>
        <Footer></Footer>
      </div>
    );
  }
}

export default index;
