import { shallow, render, mount } from 'enzyme';
import {window, match, app, remote, dialog} from './__mocks__/electron';  
import React from 'react';
import NavBar from '../components/NavBar/NavBar'
import PortUpdate from "../components/PortUpdate/PortUpdate";
import styled from 'styled-components';



describe('Test the MainContainer component', () => {
   
    // test it canvas container is rendered
    it('Contains NavBar component', () => {
      const target = shallow(<NavBar />);
      // expect(target.contains(<PortUpdate />)).toBe(true);
    });
    // test if bottom panel is rendered
    // it('Contains BottomPanel component', () => {
    //   expect(target.contains(<BottomPanel />)).toBe(true);
    // });
  });