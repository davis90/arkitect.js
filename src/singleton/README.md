## **Singleton**

Singleton pattern restricts the instantiation of a class to one object.

### **How to use**

#### **Import**

 You can use import with es6 import:

    import { Singleton } from 'arkitect.js';

 Or use required syntax:

    var arkitect = require('arkitect.js');
    var Singleton = arkitect.Singleton;

 #### **Examples:**

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