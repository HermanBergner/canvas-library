//import Vector from '../src/lib/vector'
import { expect } from 'chai'
import { Vector } from '../src/library'



describe('Vector', () => {
  
  describe('basic', () => {
    it('Should create a new vector', () => {
      const vector = new Vector()
      expect(vector instanceof Vector).to.equal(true)
    });
  });
});