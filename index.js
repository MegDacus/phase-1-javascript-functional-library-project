//Collection Functions//
const unmodifiedTestArr = [1, 2, 3, 4]
const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}

function findSomething(item) {
    return item <= 4;
}

function changeObjectToArray(collection) {
    if (!Array.isArray(collection)) {
        collection = Object.values(collection)
    }
    return collection;
}

function myEach(collection, callback) {
    let modifiedCollection = collection;
   if (!Array.isArray(collection)) {
       modifiedCollection = Object.values(collection)
   }
   modifiedCollection.forEach(number => callback(number))
   return collection;
}

function myMap (collection, callback) {
    collection = changeObjectToArray(collection);
    return collection.map(callback);
}

function myReduce(collection, callback, initial) {
    collection = changeObjectToArray(collection)
    if (!initial) {return collection.reduce(callback)}
    
    else {return collection.reduce(callback, initial)}
}

function myFind(collection, callback) {
    collection = changeObjectToArray(collection)
    return collection.find(callback);
}

function myFilter(collection, callback) {
    collection = changeObjectToArray(collection)
    return collection.filter(callback);
}

function mySize(collection) {
    collection = changeObjectToArray(collection);
    return collection.length;
}

//Array Functions//

function myFirst(array, n) {
    let [first] = array;
    if (!n) {return first}
    else {return array.slice(0, n)};
}

function myLast(array, n) {
    if (!n) {return array[array.length - 1]}
    else {return array.slice(-n)}
}

//Object Functions//

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}