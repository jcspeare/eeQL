import { shallow, configure, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {remote} from '../__mocks__/electron'
import React from 'react';
import NavBar from '../components/NavBar/NavBar'
import PortUpdate from "../components/PortUpdate/PortUpdate";
import FileUpdate from "../components/FileUpdate/FileUpdate"

configure({adapter: new Adapter()});

describe('NavBar component renders', () => {
  // shallow render NavBar as the component to test against
  const wrapper = shallow(<NavBar />);

    it('NavBar contains PortUpdate component', () => {
      expect(wrapper.contains(<PortUpdate />)).toBe(true);
    });

    it('NavBar contains FileUpdate component', () => {
      expect(wrapper.contains(<FileUpdate />)).toBe(true);
    });
  });