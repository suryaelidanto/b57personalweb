class Phone {
  constructor(name, battery, signal) {
    this.name = name;
    this.battery = battery;
    this.signal = signal;
  }

  connectWifi() {
    // logic koneksi ke wifi
    if (this.signal >= 50 && this.battery > 5) {
      // konek ke wifi berhasil
      this._wifiConnectSuccess();
    } else {
      this._wifiConnectFailed();
    }
  }

  _wifiConnectSuccess() {
    console.log("Berhasil konek ke wifi!");
  }

  _wifiConnectFailed() {
    console.log("Gagal konek ke wifi!");
  }
}

const apple = new Phone("I Phone 15", 10, 50);
apple.connectWifi();
