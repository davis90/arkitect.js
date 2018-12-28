## **Abstract**

Abstract class may contain a mix of methods declared with or without an implementation.
It cannot be instantiated, but they can be subclassed.

### **How to use**

#### **Import**

 You can use import with es6 import:

    import { Abstract } from 'arkitect.js';

 Or use required syntax:

    var arkitect = require('arkitect.js');
    var Abstract = arkitect.Abstract;

 #### **Examples:**

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