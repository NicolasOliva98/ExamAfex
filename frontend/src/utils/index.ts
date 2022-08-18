export const getId = (url: string) => {
  let regx = /(\d+)\D+$/;
  let id = parseInt(regx.exec(url)[1]);
  if (id > 0 && id < 10) {
    return "00" + id;
  } else if (id >= 10 && id < 100) {
    return "0" + id;
  } else return id;
};

export const formatter = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "clp",
  minimumFractionDigits: 0,
});
