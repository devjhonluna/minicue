/**
 * Funcion para Generar
 *
 * @export
 * @async
 * @returns {Promise<any>}
 */
export async function copiarAlPortapapeles() {
  try {
    // @ts-ignore
    const guionAI = document.getElementById("guionAI").value;
    await navigator.clipboard.writeText(guionAI);
    alert("Texto copiado al portapapeles");
  } catch (err) {
    alert("Hubo un error al copiar el texto: " + err);
  }
}

/**
 * Description placeholder
 *
 * @param {*} setTema
 * @param {*} setDuracion
 * @param {*} setIdioma
 * @returns {string[]}
 */
export const Validate = (setTema, setDuracion, setIdioma) => {
  let errors = [];
  if (setTema.trim() === "") {
    errors.push("el tema es requerido");
  }
  if (setDuracion.id === 0) {
    errors.push("la duracion del guion es requerida");
  }
  if (setIdioma.id === 0) {
    errors.push("el idioma es requerido");
  }
  return errors;
};

