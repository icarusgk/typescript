class HospitalEmployee {
    constructor(name, position) {
        this._name = name;
        this._position = position;
    }
    get name() {
        return this._name;
    }
    get position() {
        return this._position;
    }
    changePosition(newPosition) {
        this._position = newPosition;
    }
}
class Doctor extends HospitalEmployee {
    constructor(name, position) {
        super(name, position);
    }
}
const roger = new HospitalEmployee("Roger", "Doctor");
console.log(roger.name);
console.log(roger.position);
roger.changePosition("Helper");
console.log(roger.position);
const bryan = new Doctor("Bryan", "Doctor");
console.log(bryan.name);
