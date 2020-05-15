const handler = {
    get: (obj, prop) => {
        return prop in obj ?
            obj[prop] :
            void 0;
    },
    set: (obj, prop, value) => {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value < 0 && value > 99) {
                throw new RangeError('The age seems invalid');
            }
        }

        if (prop === 'name') {
            if (value.length > 2) {
                throw new RangeError(`The name is invalid and has to be more then ${value.length}`);
            }
        }

        // The default behavior to store the value
        obj[prop] = value;

        // Indicate success
        return true;
    },
    has: (oTarget, sKey) => sKey in oTarget || oTarget.hasItem(sKey)
};

const proxy2 = new Proxy({
    name: 'Maks',
    age: 25
}, handler);
