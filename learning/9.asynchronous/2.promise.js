// janji untuk bayar hutang

const bayarHutang = new Promise((resolve, reject) => {
  const sudahBayarHutang = false;

  if (sudahBayarHutang) {
    resolve("Yeay kamu sudah bayar hutang, kamu keren!");
  } else {
    reject("Hey, kamu belum bayar hutang!");
  }
});

bayarHutang
  .then((value) => {
    console.log(value);
  })
  .catch((reason) => {
    console.log(reason);
  }); // error handling