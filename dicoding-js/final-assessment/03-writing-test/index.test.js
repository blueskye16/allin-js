import {sum} from './index.js';
import { describe, it, expect } from 'bun:test';

describe('Sum test', () => {
  it('should sum number correctly', () => {
    const numA = 1;
    const numB = 2;

    const sumTest = sum(numA, numB);

    const expectedResult = 3;
    expect(sumTest).toBe(expectedResult);
  })

  it('should throw an error if any of the variables is of a data type other than number', () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      const numA = a;
      const numB = 4;

      // Action
      add(numA, numB);
    };

    expect(potentialErrorToBeThrew).toThrow(Error);
  });
})
