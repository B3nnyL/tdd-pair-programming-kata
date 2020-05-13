export class Length {
  constructor(val, uint) {
    this.value = val
    this.unit = uint
  }

  getVal() {
    return this.value
  }

  getUint() {
    return this.unit
  }

  parseTo(u) {
    let len = this
    if (this.unit === 'foot') {
      if (u === 'inch') {
        len = new Length(this.value * 12, u)
      }
    }
    return len
  }
}
