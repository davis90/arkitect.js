import Interface from '@/interface/Interface';

/**
 * Implementation mixin Function
 * @param {Interface} interfaceDefs - A interface definition
 * @constructor
 */
const Implementation = (...interfaceDefs) => class {
  /**
   * Implementation class constructor. Interface can't be instantiated
   * @class
   * @throws {TypeError} Try to implement unvalid Interface definition
   * @throws {Error} Doesn't implements given Interface
   */
  constructor() {
    // eslint-disable-next-line no-prototype-builtins
    const areValidInterfaces = interfaceDefs.every(i => Interface.isPrototypeOf(i));
    if (areValidInterfaces === false) {
      throw new TypeError(`Implementation.constructor : interface definition have to be an ${Interface.name} class.`);
    }
    const areAllImplemented = interfaceDefs.every(i => i.implements(this));
    if (interfaceDefs.length === 0 || areAllImplemented === false) {
      throw Error(`Implementation.constructor : ${this.constructor.name} doesn't implement given interface.`);
    }
  }
};

export default Implementation;
