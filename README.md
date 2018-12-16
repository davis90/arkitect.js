# arkitect.js

arkitect.js is a library that aims to help create good software architectures

## **Utils**

### **Interface**

An interface is used to specify a behavior that classes must implement.

#### **How to use**

**Import**

 You can use import with es6 import:

    import { Interface } from 'arkitect.js';

 Or use required syntax:

    var arkitect = require('arkitect.js');
    var Interface = arkitect.Interface;

 **Examples:**

 Interface Creation:

    class MyInterface extends interface {
       toString(){}
       compute(){}
    }

 Other classes creation:

    class Implementation {
      constructor(){
        this._value = 14;
      }
      toString(){
        return String(this._value);
      }
    class Implementation2 extends Implementation {
      compute(){
        this._value += 1;
      }
     }

 Test if they implement the interface:

    const impl1 = new Implementation();
    const impl2 = new Implementation2();
    MyInterface.implements(impl1) // returns false
    MyInterface.implements(impl2) // returns true


### Abstract

Abstract class may contain a mix of methods declared with or without an implementation.
It cannot be instantiated, but they can be subclassed.

#### **How to use**

**Import**

 You can use import with es6 import:

    import { Abstract } from 'arkitect.js';

 Or use required syntax:

    var arkitect = require('arkitect.js');
    var Abstract = arkitect.Abstract;

 **Examples:**

 Custom abstract class creation:

    class MyAbstract extends Abstract {

     constructor(value){
        super();
        this._value = value;
     }

     compute(){
       return this._value * 2;
     }
    }

 Other class creation:

    class Instantiable extends MyAbstract {
       compute(){
         return super.compute() + this._value;
       }
    }

Instantiation:

    const a1 = new Abstract(4);         /* Throws an error. Constructor of Abstract
                                           class is not usable directly */
    const a2 = new MyAbstract(4)        /* Throws an error. Cannot instantiate
                                           Abstract class */
    const a3 = new Instantiable(4);     /* Create an instance of Instantiable */
    a3.compute()                        /* Returns 12 */

## **GoF patterns**

### Singleton

Singleton pattern restricts the instantiation of a class to one object.

#### **How to use**

**Import**

 You can use import with es6 import:

    import { Singleton } from 'arkitect.js';

 Or use required syntax:

    var arkitect = require('arkitect.js');
    var Singleton = arkitect.Singleton;

 **Examples:**

 Custom singleton class creation:

     class MySingleton extends Singleton {

     constructor(value){
        super();
        this._example = value;
     }

     get example(){
       return this._example;
     }

    }

 instantiation:

    const s1 = new Singleton()          /* Throws an error. Constructor of Singleton
                                           class is not usable directly */
    const s2 = MySingleton.instance()   /* No instance exists. create and return
                                           a new instance */
    const s3 = new MySingleton()        /* Throws an error. Constructor of Singleton
                                           subclass is not usable directly */
    const s4 = MySingleton.instance()   /* Returns an instance. It is same as s2 */


Many sublcasses:

    class FirstSingleton extends MySingleton {
    }

    class SecondSingleton extends MySingleton {
    }

    const s2 = FirstSingleton.instance()    /* No instance exists. create and return
                                               a new instance of FirstSingleton */
    const s3 = FirstSingleton.instance()    /* Returns an instance. It is same as s2 */
    const s4 = SecondSingleton.instance()   /* Returns undefined. No instance exists, and can't create one
                                               because an intance of MySingleton already exists */

Other example with subclasses:

    class FirstSingleton extends MySingleton {
    }

    class SecondSingleton extends MySingleton {
    }

    const s2 = MySingleton.instance()       /* No instance exists. create and return
                                               a new instance of MySingleton */
    const s3 = FirstSingleton.instance()    /* Returns undefined. No instance exists, and can't create one
                                               because an intance of MySingleton already exists */
    const s4 = SecondSingleton.instance()   /* Returns undefined. No instance exists, and can't create one
                                               because an intance of MySingleton already exists */


