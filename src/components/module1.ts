export const fruit: string = 'apple';

const user = {
    name: "Daniel",
    age: 26,
};

function greet(name: string | number, old: number): string {
    return `Hi ${name} . You are ${old} years old!`
}

//Computed property
const sumMethod = 'sum';
const distractMethod = 'distract';

const myComputedPropertiesObject = {
    [sumMethod](a: number, b: number) {
        return a + b;
    },
    [distractMethod](a: number, b: number) {
        return a - b;
    },
    //This wont work either [sumMethod] or sum() format in the same time
    // sum(a: number, b: number) {
    //     return a + b;
    // }
}

export default {
    fruit,
    user,
    greet,
    myComputedPropertiesObject
}