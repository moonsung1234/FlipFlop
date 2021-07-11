
class Latch {
    constructor(Q, not_Q) {
        this.Q = Q;
        this.not_Q = not_Q;
    }

    AND_gate(a, b) {
        return Number(a && b);
    }
    
    OR_gate(a, b) {
        return Number(a || b);
    }

    checkQ() {
        while(true) {
            if(this.Q != null) return this.Q;
        }
    }

    checkNotQ() {
        while(true) {
            if(this.not_Q != null) return this.not_Q;
        }
    }

    bulid(S, R) {
        let result_Q = Number(!this.OR_gate(R, this.not_Q));
        let result_not_Q = Number(!this.OR_gate(S, this.Q));

        this.Q = result_Q;
        this.not_Q = result_not_Q;

        return [this.Q, this.not_Q];
    }
}

module.exports = Latch;