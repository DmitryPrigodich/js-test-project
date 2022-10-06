/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

import { NumbersValidator } from '../../app/NumbersValidator.js';
import { expect } from 'chai';

describe('isNumberEven positive tests', () => {
    let validator;

    beforeEach(() => {
        validator = new NumbersValidator();
    });

    it('should return true when provided with an even number', () => {
        const validationResults = validator.isNumberEven(4);
        expect(validationResults).to.be.equal(true);
    });
});
