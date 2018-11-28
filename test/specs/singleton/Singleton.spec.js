/* eslint class-methods-use-this: 0 */

import { expect, assert } from 'chai';
import Singleton from 'singleton/Singleton';

describe('Singleton', () => {
  let Unique1;

  beforeEach(() => {
    Unique1 = class extends Singleton {
    };
  });

  it('getInstance before create instance return undefined', () => {
    assert.equal(Unique1.getInstance(), undefined);
  });

  it('getInstance after create instance return it', () => {
    const inst1 = new Unique1();
    assert.equal(Unique1.getInstance(), inst1);
  });

  it('Throws error if try to create an instantiate Singleton class twice', () => {
    expect(() => new Unique1()).to.not.throw();
    expect(() => new Unique1()).to.throw();
  });

  it('Multiple getInstance return always the same instance', () => {
    const inst1 = new Unique1();
    const inst2 = Unique1.getInstance();
    const inst3 = Unique1.getInstance();
    assert.equal(inst1, inst2);
    assert.equal(inst1, inst3);
    assert.equal(inst2, inst3);
  });
});
