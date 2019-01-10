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
      constructor(va11, val2) {
        super();
        this.val1 = va11;
        this.val2 = val2;
      }
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

  it('Instance have been created with arguments passed to instance function', () => {
    const inst = Unique3.instance('coucou', 3, 7);
    assert.equal(inst, Unique1.instance());
    assert.equal(inst, Unique1.instance(7, 10, 'lol'));
    assert.equal(inst.val1, 'coucou');
    assert.equal(inst.val2, 3);
  });

  it('Uninstantiated subclass doesn\'t return instance of other subclass that share same superclass singleton', () => {
    const instance = Unique2.instance();
    assert.isTrue(instance instanceof Unique2);
    assert.equal(instance, Unique1.instance());
    assert.notEqual(instance, Unique3.instance());
    assert.isUndefined(Unique3.instance());
  });
});
