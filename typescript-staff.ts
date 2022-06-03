class Staff {
    name: string;
    email: string;
    age: number;
    constructor(name:string, email:string, age:number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getAge() {
        return this.age;
    }
    setName(name: string) {
        this.name = name;
    }
    setEmail(email: string) {
        this.email = email;
    }
    setAge(age: number) {
        this.age = age;
    }
}
let staff = new Staff('staff1','staff1@gmail.co',100)

console.log(staff.getName());
staff.setName('Staff2');
let currentName = staff.getName()
console.log(currentName);

