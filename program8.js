class HashMap {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map.hasOwnProperty(key) ? this.map[key] : null;
    }

    remove(key) {
        if (this.map.hasOwnProperty(key)) {
            delete this.map[key];
        }
    }
}


const myMap = new HashMap();
myMap.put('a', 1);
console.log(myMap.get('a')); 
myMap.remove('a');
console.log(myMap.get('a')); 
