/* eslint class-methods-use-this: 0 */

import { expect, assert } from 'chai';
import Singleton from '@/singleton/Singleton';

describe('Singleton', () => {
  let Unique1;
  let Unique2;
  let Unique3;

  beforeEach(() => {
    Unique1 = class extends Singleton {
    };
    Unique2 = class extends Unique1 {
    };
    Unique3 = class extends Unique1 {
    };
  });

  it('Throws error if try to instantiate Singleton from new', () => {
    expect(() => new Singleton()).to.throw();
  });

  it('Throws error if try to instantiate Singleton from instance method', () => {
    expect(() => Singleton.instance()).to.throw();
  });

  it('Throws error if try to instantiate subclass of Singleton using new', () => {
    expect(() => new Unique1()).to.throw();
    expect(() => new Unique2()).to.throw();
  });

  it('get instance return always the first created value', () => {
    let instance;
    expect(() => {
      instance = Unique1.instance();
    }).to.not.throw();
    assert.isTrue(instance instanceof Unique1);
    assert.equal(instance, Unique1.instance());
    assert.equal(instance, Unique1.instance());
  });

  it('Multiple get instance return always the same instance', () => {
    const inst1 = Unique1.instance();
    assert.equal(Unique1.instance(), Unique1.instance());
    assert.equal(inst1, Unique1.instance());
  });

  it('Uninstantiated superclass return instance of subclass that have been instantiated', () => {
    const inst1 = Unique2.instance();
    assert.equal(inst1, Unique1.instance());
  });

  it('Uninstantiated subclass doesn\'t return instance of other subclass that share same superclass singleton', () => {
    const instance = Unique2.instance();
    assert.isTrue(instance instanceof Unique2);
    assert.equal(instance, Unique1.instance());
    assert.notEqual(instance, Unique3.instance());
    assert.isUndefined(Unique3.instance());
  });
});
