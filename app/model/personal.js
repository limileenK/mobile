import { observable } from 'mobx'
import autobind from 'autobind-decorator'

@autobind

class PersonalStore {
    @observable carrier = ''
    @observable os = ''
    @observable speed_now = 0

    setCarrier(c) {
        this.carrier = c
    }
    setOS(o) {
        this.os = o
    }
    setSpeed(s) {
        this.speed_now = s
    }
}

export default new PersonalStore()