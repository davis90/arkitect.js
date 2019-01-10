import Interface from '@/interface/Interface';

/**
 * Implementation mixin Function
 * @param {Interface} interfaceDef - A interface definition
 * @constructor
 */
const Implementation = interfaceDef => class {
  /**
   * Implementation class constructor. Interface can't be instantiated
   * @class
   * @throws {TypeError} Try to implement unvalid Interface definition
   * @throws {Error} Doesn't implements given Interface
   */
  constructor() {
    // eslint-disable-next-line no-prototype-builtins
    if (Interface.isPrototypeOf(interfaceDef) === false) {
      throw new TypeError(`Implementation.constructor : interface definition have to be an ${Interface.name} class.`);
    }
    if (interfaceDef.implements(this) === false) {
      throw Error(`Implementation.constructor : ${this.constructor.name} doesn't implement.`);
    }
  }
};

export default Implementation;
