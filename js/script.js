"use strict";
class Lavoratori {
    constructor(name, lastName, redditoLordo) {
        this.name = name;
        this.lastName = lastName;
        if (redditoLordo < 15000) {
            this.codredd = 1;
        }
        else if (redditoLordo >= 15000 && redditoLordo < 28000) {
            this.codredd = 2;
        }
        else {
            this.codredd = 3;
        }
        if (this.codredd === 1) {
            this.tasseIrpef = redditoLordo * 0.23;
        }
        else if (this.codredd === 2) {
            this.tasseIrpef = redditoLordo * 0.25;
        }
        else {
            this.tasseIrpef = redditoLordo * 0.35;
        }
        this.redditoLordo = redditoLordo;
        this.tassaInps = redditoLordo * 0.33;
    }
    getTAsseIrpef() {
        return this.tasseIrpef;
    }
    getUtileTasse() {
        this.redditoLordo - this.tasseIrpef;
    }
    getRedditoAnnuoNetto() { }
}
class LavoratiAutonomi extends Lavoratori {
    getTasseInps() {
        return (this.tassaInps = this.redditoLordo * 0.35);
    }
    getUtileTasse() {
        this.redditoLordo - (this.tasseIrpef + this.tassaInps);
    }
}
class SociDellaSocieta extends Lavoratori {
    getTasseInps() {
        return (this.tassaInps = this.redditoLordo * 0.05);
    }
    getUtileTasse() {
        this.redditoLordo - (this.tasseIrpef + this.tassaInps);
    }
}
let dip1 = new LavoratiAutonomi("Pantera", "Rosa", 20000);
let dip2 = new SociDellaSocieta("Pedro", "Garcia", 20000);
console.log(dip1);
console.log(dip2);
