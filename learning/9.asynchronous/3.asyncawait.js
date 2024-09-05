// janji untuk bayar hutang

const bayarHutang = new Promise((resolve, reject) => {
  const sudahBayarHutang = false;

  if (sudahBayarHutang) {
    resolve("Yeay kamu sudah bayar hutang, kamu keren!");
  } else {
    reject("Hey, kamu belum bayar hutang!");
  }
});

async function jalankanBayarHutang() {
  try {
    const response = await bayarHutang;
    console.log(response);
  } catch (error) {
    console.log(error);
    alert(error);
  }
}

jalankanBayarHutang();
