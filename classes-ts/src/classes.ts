class HospitalEmployee {
    _name: string;
    _position: string;

    constructor(name: string, position: string) {
        this._name = name;
        this._position = position;
    }

    get name(): string {
        return this._name;
    }

    get position(): string {
        return this._position;
    }

    changePosition(newPosition: string) {
        this._position = newPosition;
    }
}

class Doctor extends HospitalEmployee {
    constructor(name: string, position: string){
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