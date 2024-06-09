import { trocarTema, verificarTema } from "./helpers/tema-helpers.js"

botaoTema.addEventListener("click", () => {
    trocarTema(body, botaoTema)
})

verificarTema(body, botaoTema)