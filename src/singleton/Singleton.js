/**
 * get base prototype of Singleton class
 * @private
 * @returns {Array<Object>} Base Singleton prototype
 */
const getBaseClassSingleton = (classDef, Singleton) => {
  const parentClass = Object.getPrototypeOf(classDef);
  if (parentClass === Singleton) {
    return classDef;
  }
  return getBaseClassSingleton(parentClass, Singleton);
};

/**
 * Symbol to save unique instance in constructor of class
 * @private
 * @type {Symbol}
 */
const instance = Symbol('instance');

/**
 * Array of active constructor to be able to create one instance of class
 * @private
 * @type {Object}
 */
const activeConstructors = {};

class Singleton {
  /**
   * Singleton constructor. Singleton class can be instantiate just one time.
   * @class
   * @throws {Error} Try to instantiate Singleton
   * @throws {Error} Try to instantiate a Singleton from new operator
   */
  constructor() {
    if (this.constructor === Singleton) {
      throw Error(`Singleton.constructor : ${this.constructor.name} cannot be instantiated.`);
    }
    if (activeConstructors[this.constructor] !== true) {
      throw Error(`Singleton.constructor : ${this.constructor.name} constructor cannot be used directly.`);
    } else {
      delete activeConstructors[this.constructor];
      getBaseClassSingleton(this.constructor, Singleton)[instance] = this;
    }
  }

  /**
   * Get unique instance if is already instantiate, creates it otherwise.
   * If a subclass of this class was instantiate, it returns the subclass instance. If there are
   * many subclasses of one Singleton class, the uninstantiated class return undefined when call
   * getInstance, but cannot be instantiated.
   * @param {*} args - Needed parameters to create instance
   * @returns {Singleton} return the unique instance
   */
  static instance(...args) {
    if (this[instance] !== undefined) {
      if ((this[instance] instanceof this) === false) {
        return undefined;
      }
    } else {
      activeConstructors[this] = true;
      getBaseClassSingleton(this, Singleton)[instance] = new this(...args);
    }
    return this[instance];
  }
}

export default Singleton;
