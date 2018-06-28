class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
    public getName() {
        return this.name;
    }
}
let name = new Animal('zp').getName();
console.log(name)

class Point {
    x: number;
    y: number;
}
interface Point3d extends Point {
    z: number;
}
let p: Point3d = {
    x: 1,
    y: 2,
    z: 3
}
export default Animal