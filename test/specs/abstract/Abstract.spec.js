/* eslint class-methods-use-this: 0 */

import { expect, assert } from 'chai';
import Abstract from '@/abstract/Abstract';

describe('InterfaceMixin', () => {
  const Abstract1 = class extends Abstract {
    constructor() {
      super();
      this.value1 = 'value1';
    }
  };

  const Instantiable1 = class extends Abstract1 {
    constructor() {
      super();
      this.value2 = 'value2';
    }
  };

  const Instantiable2 = class extends Instantiable1 {
    constructor() {
      super();
      this.value3 = 'value3';
    }
  };

  it('Throws error if try to create an instance of Abstract', () => {
    expect(() => new Abstract()).to.throw();
  });

  it('Doesn\'t throws error if try to create an instance of Abstract subclass', () => {
    expect(() => new Abstract1()).to.throw();
  });

  it('Doesn\'t thow error if try to instantiate a class that is not abstract anymore', () => {
    expect(() => new Instantiable1()).to.not.throw();
    expect(() => new Instantiable2()).to.not.throw();
  });

  it('Keep inherance', () => {
    const inst1 = new Instantiable1();
    const inst2 = new Instantiable2();
    assert.equal(inst1.value1, 'value1');
    assert.equal(inst1.value2, 'value2');
    assert.isUndefined(inst1.value3);
    assert.equal(inst2.value1, 'value1');
    assert.equal(inst2.value2, 'value2');
    assert.equal(inst2.value3, 'value3');
  });
});
