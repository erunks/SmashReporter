import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import FighterChoice from '.';

describe('<FighterChoice>', () => {
  const props = {
    fighter: 'mario',
    onClick: spy()
  };
  const container = shallow(<FighterChoice leftFacing={false} {...props}/>);

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  describe('the vertical fighter choice', () => {
    describe('when the fighter choice is clicked', () => {
      it('should call onClick', () => {
        const fighterChoice = container.find('.FighterChoice.vertical');
        fighterChoice.simulate('click');

        expect(props.onClick.called).toBe(true);
      });
    });

    describe('when leftFacing is true', () => {
      const container = shallow(<FighterChoice leftFacing={true} {...props} />);

      it('should add the class name appropriately', () => {
        const fighterChoice = container.find('.FighterChoice.vertical');

        expect(fighterChoice.hasClass('faceLeft')).toBe(true);
      })
    });
  });

  describe('the horizontal fighter choice', () => {
    describe('when the fighter choice is clicked', () => {
      it('should call onClick', () => {
        const fighterChoice = container.find('.FighterChoice.horizontal');
        fighterChoice.simulate('click');

        expect(props.onClick.called).toBe(true);
      });
    });

    describe('when leftFacing is true', () => {
      const container = shallow(<FighterChoice leftFacing={true} {...props} />);

      it('should add the class name appropriately', () => {
        const fighterChoice = container.find('.FighterChoice.horizontal');

        expect(fighterChoice.hasClass('faceLeft')).toBe(true);
      })
    });
  });
});
