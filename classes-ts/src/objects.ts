interface ExampleInterface {
    name: string;
    phone: string;
    age: number;
    is_adult: boolean;
}

const example: ExampleInterface = {
    "name": "Roger",
    "phone": "+12348429",
    "age": 20,
    "is_adult": true
}

const example1: ExampleInterface = {
    name: "Roger",
    phone: "+418238923",
    age: 20,
    is_adult: true
}

console.log("example:", example.name)
console.log("example1:", example1.name)
