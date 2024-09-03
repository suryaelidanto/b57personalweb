class Invoice {
  #price = 0;

  set price(value) {
    if (value <= 0) {
      throw new Error(`Value cannot <= 0 | your value : ${value}`);
    }

    this.#price = value;
  }

  get price() {
    return this.#price;
  }

  #test() {
    console.log("testing")
  }

  testlagi() {
    this.#test()
  }
}

const invoice = new Invoice();
invoice.testlagi()
