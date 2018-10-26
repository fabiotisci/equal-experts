import * as React from 'react';
import { configure, mount, ReactWrapper } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { App }  from '../App';

configure({adapter: new Adapter()});

describe('<App>', () => {
    let wrapper: ReactWrapper;
    let input: ReactWrapper;
    let num1: ReactWrapper;
    let delButton: ReactWrapper;
    let clrButton: ReactWrapper;
    let plsButton: ReactWrapper;
    let equalsButton: ReactWrapper;
    let minusButton: ReactWrapper;
    let periodButton: ReactWrapper;

    beforeEach(() => {
      wrapper = mount(<App />);
      num1 = wrapper.find('button[tabIndex=11]');
      delButton = wrapper.find('button[tabIndex=1]');
      clrButton = wrapper.find('button[tabIndex=0]');
      plsButton = wrapper.find('button[tabIndex=18]');
      minusButton = wrapper.find('button[tabIndex=14]');
      equalsButton = wrapper.find('button[tabIndex=2]');
      periodButton = wrapper.find('button[tabIndex=15]');
    });    

    it('Should render the expected template', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('Should update the display accordingly based on the clicks', () => {
      num1.simulate('click');
      num1.simulate('click');
      num1.simulate('click');

      input = wrapper.find('input');
      expect(input.prop('value')).toEqual('111');

      delButton.simulate('click');
      input = wrapper.find('input');
      expect(input.prop('value')).toEqual('11');

      clrButton.simulate('click');
      input = wrapper.find('input');
      expect(input.prop('value')).toEqual('0');
    });

    it('Should perform the addition operation', () => {
      num1.simulate('click');
      plsButton.simulate('click');
      num1.simulate('click');
      equalsButton.simulate('click');

      input = wrapper.find('input');
      expect(input.prop('value')).toEqual('2');
    });

    it('Should perform the substract operation', () => {
      num1.simulate('click');
      minusButton.simulate('click');
      num1.simulate('click');
      equalsButton.simulate('click');

      input = wrapper.find('input');
      expect(input.prop('value')).toEqual('0');
    });

    it('should not add more than a period', () => {
        periodButton.simulate('click');
        periodButton.simulate('click');
        periodButton.simulate('click');

        input = wrapper.find('input');
        expect(input.prop('value')).toEqual('.');  
    })


})