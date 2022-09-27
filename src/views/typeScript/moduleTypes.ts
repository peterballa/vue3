const myString: string = 'Foobar';
const myBool: boolean = true;
const myFloatNumber: number = 23.23;
const myIntegerNumber: number = 69;
const myIntegerArray: number[] = [43, 34, 23];
const myIntegerArrayGenerics: Array<number> = [43, 34, 23];
const myStringArray: string[] = ['apple', 'kiwi'];
let myAnyObject: any = {x: 0};

//Object type
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

//Optional properties
function printName(obj: { first: string; last?: string }) {
    if (obj.last !== undefined) {
        console.log(`${obj.last} ${obj.first}`);
        return;
    }

    console.log(obj.first);
}

function printId(id: number | string) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    } else {
        // Here, id is of type 'number'
        console.log(id);
    }
}



export default {
    myString,
    myBool,
    myFloatNumber,
    myIntegerNumber,
    myIntegerArray,
    myIntegerArrayGenerics,
    myStringArray,
    myAnyObject,
    printCoord,
    printName,
    printId
}