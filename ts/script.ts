// questo è l'irpef su stipendio lordo
//     fino a 15mila euro: aliquota 23%
//     fra 15mila e 28mila euro: aliquota 25%
//     fra 28mila e 50mila euro: aliquota 35%
//     Oltre i 50mila euro: aliquota 43%
// [14:12]
// L’INPS, con circolare n. 25 del 2022, ha comunicato i valori aggiornati per il 2022 dei minimali e massimali di contribuzione e delle aliquote contributive dovute dai lavoratori iscritti alla gestione separata. La disciplina riguarda sia i lavoratori autonomi, per i quali l’aliquota è prevista nella misura del 33%, sia i professionisti senza cassa, per i quali l’aliquota è fissata nella misura del 25%, sia i collaboratori.

abstract class Lavoratori {
    name: string;
    lastName: string;
    codredd: number;
    protected tasseIrpef: number;
    protected redditoLordo: number;
    protected tassaInps: number;
    constructor(name: string, lastName: string, redditoLordo: number) {
        this.name = name;
        this.lastName = lastName;
        if (redditoLordo < 15000) {
            this.codredd = 1;
        } else if (redditoLordo >= 15000 && redditoLordo < 28000) {
            this.codredd = 2;
        } else {
            this.codredd = 3;
        }

        if (this.codredd === 1) {
            this.tasseIrpef = redditoLordo * 0.23;
        } else if (this.codredd === 2) {
            this.tasseIrpef = redditoLordo * 0.25;
        } else {
            this.tasseIrpef = redditoLordo * 0.35;
        }

        this.redditoLordo = redditoLordo;
        this.tassaInps = redditoLordo * 0.33;
    }

    getTAsseIrpef(): number {
        return this.tasseIrpef;
    }
    abstract getTasseInps(): void;

    getUtileTasse() {
        this.redditoLordo - this.tasseIrpef;
    }

    getRedditoAnnuoNetto() {}
}

class LavoratiAutonomi extends Lavoratori {
    getTasseInps() {
        return (this.tassaInps = this.redditoLordo * 0.33);
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
let dip2 = new SociDellaSocieta("Pddra", "dsa", 20000);

console.log(dip1);
console.log(dip2);
