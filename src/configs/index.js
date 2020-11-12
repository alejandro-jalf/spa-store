const configs = (() => {
  const URL_API_CONECTIONS = process.env.VUE_APP_URL_API_CONECTIONS;
  const URL_API_ARTICULOS = process.env.VUE_APP_URL_API_ARTICULOS;

  const NAMES_SUC = {};
  NAMES_SUC[`${process.env.VUE_APP_NAME_SUC_ZARAGOZA}`] = "ZARAGOZA";
  NAMES_SUC[`${process.env.VUE_APP_NAME_SUC_VICTORIA}`] = "VICTORIA";
  NAMES_SUC[`${process.env.VUE_APP_NAME_SUC_OLUTA}`] = "OLUTA";
  NAMES_SUC[`${process.env.VUE_APP_NAME_SUC_BODEGA}`] = "BODEGA";
  NAMES_SUC[`${process.env.VUE_APP_NAME_SUC_JALTIPAN}`] = "JALTIPAN";

  return {
    NAMES_SUC,
    URL_API_CONECTIONS,
    URL_API_ARTICULOS
  };
})();

module.exports = configs;
