import { test } from 'node:test';
import assert from 'node:assert';
import { add } from './calculator.mjs';

test('should add correctly', () => {
  // Arrange
  const operandA = 1;
  const operandB = 1;

  // Action
  const actualValue = add(operandA, operandB);

  // Assert
  const expectedValue = 2;
  assert.equal(actualValue, expectedValue);
});

test('should throw an error if string passed on numA parameter', () => {
  const potentialErrorToBeThrew = () => {
    // Arrange
    const operandA = '5';
    const operandB = 4;

    // Action
    add(operandA, operandB);
  };

  // Assert
  assert.throws(potentialErrorToBeThrew, Error);
});