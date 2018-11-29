/* eslint class-methods-use-this: 0 */

import { expect, assert } from 'chai';
import Interface from '@/interface/Interface';

describe('Interface', () => {
  const Interface1 = class extends Interface {
    func1() {
    }

    func2() {
    }
  };

  const Interface2 = class extends Interface1 {
    funct3() {
    }
  };


  it('Throws error if try to create an instance of Interface', () => {
    expect(() => new Interface1()).to.throw();
    expect(() => new Interface2()).to.throw();
  });

  it('Test if class implements interface', () => {
    const Implement1 = class {
      func1() {
      }

      func2() {
      }
    };
    const Implement2 = class extends Implement1 {
      funct3() {
      }
    };
    const impl1 = new Implement1();
    const impl2 = new Implement2();
    assert.isTrue(Interface1.implements(impl1));
    assert.isFalse(Interface2.implements(impl1));
    assert.isTrue(Interface1.implements(impl2));
    assert.isTrue(Interface2.implements(impl2));
  });

  it('Test if class doesn\'t implement interface', () => {
    const Implement1 = class {
      func4() {
      }

      func5() {
      }
    };
    const Implement2 = class extends Implement1 {
      funct3() {
      }
    };
    const impl1 = new Implement1();
    const impl2 = new Implement2();
    assert.isFalse(Interface1.implements(impl1));
    assert.isFalse(Interface2.implements(impl1));
    assert.isFalse(Interface1.implements(impl2));
    assert.isFalse(Interface2.implements(impl2));
  });
});
