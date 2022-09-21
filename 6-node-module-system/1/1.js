console.log("jancok");
//sychronouse

// const getUserSync = require("./src/getUserSync");
{
  const getUserSync = (id) => {
    const nama = id === 1 ? "Sandhika" : "Galih";
    return { id, nama };
  };

  const userSatu = getUserSync(1);
  console.log(userSatu);

  const userDua = getUserSync(2);
  console.log(userDua);

  const halo = "Hello World!";
  console.log(halo);
}
