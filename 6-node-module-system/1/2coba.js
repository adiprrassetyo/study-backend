{
  //asynchronous

  const getUser = (id, cb) => {
    const time = id === 1 ? 3000 : 2000;
    setTimeout(() => {
      const nama = id === 1 ? "Sandhika" : "Galih";
      cb({ id, nama });
    }, time);
  };

  const userSatu = getUser(1, (hasil) => {
    console.log(hasil);
  });
  const userDua = getUser(2, (hasil) => {
    console.log(hasil);
  });

  const halo = "Hellow World";
  console.log(halo);
}
