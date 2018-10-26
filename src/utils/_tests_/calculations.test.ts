import { calculate, updateDisplay } from '../';

describe('Utils', () => {
  describe('calculate', () => {
    it('should perform addition', () => {
      expect(calculate('0', '10', '+')).toEqual('10');
      expect(calculate('5', '5', '+')).toEqual('10');
      expect(calculate('-10', '5', '+')).toEqual('-5');
    })

    it('should perform substraction', () => {
      expect(calculate('0', '10', '-')).toEqual('-10');
      expect(calculate('5', '5', '-')).toEqual('0');
      expect(calculate('-10', '5', '-')).toEqual('-15');
    })
  });

  describe('updateDisplay', () => {
    expect(updateDisplay('5', '0')).toEqual('5');
    expect(updateDisplay('5', '5')).toEqual('55');
    expect(updateDisplay('5', '.')).toEqual('.5');
    expect(updateDisplay('.', '.')).toEqual('.');
  });
})