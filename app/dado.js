export default function jogarDado() {
    let valorSorteado = parseInt(Math.random()*6 +1)
    alert(`Você tirou o número ${valorSorteado}`)

    return valorSorteado
    
}
