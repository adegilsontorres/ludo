const dado = document.querySelector('.dado')

export default function jogarDado() {
    let valorSorteado = parseInt(Math.random()*6 +1)
    alert(`Você tirou ${valorSorteado} no dado!`)
    

    switch (valorSorteado) {
        case 1:
                dado.classList = 'dado';
                dado.classList.add ('sorteado-1');
            
            break;
            case 2:
                dado.classList = 'dado';
                dado.classList.add('sorteado-2');
            
            break;
            case 3:
                dado.classList = 'dado';
                dado.classList.add('sorteado-3');
            
            break;
            case 4:
                dado.classList = 'dado';
                dado.classList.add('sorteado-4');
            
            break;
            case 5:
                dado.classList = 'dado';
                dado.classList.add('sorteado-5');
                break;
            case 6:
                dado.classList = 'dado';
                dado.classList.add('sorteado-6');
            
            break;
    
        default:
            break;
        
    }

    console.log(dado);
    
    return valorSorteado
    
}
