class Singleton {
  /**
   * Singleton constructor. Singleton class can be instantiate just one time
   * @class
   */
  constructor() {
    if (this.constructor.instance !== undefined) {
      throw Error(`Singleton.constructor : ${this.constructor.name} cannot instantiated twice.`);
    } else {
      this.constructor.instance = this;
    }
  }

  /**
   * Get unique instance if is already instantiate
   * @returns {Singleton} return the unique instance
   */
  static getInstance() {
    return this.instance;
  }
}

export default Singleton;
