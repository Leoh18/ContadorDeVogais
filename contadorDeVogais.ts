const main = () => {
    console.log(`main`);

    const frase = `Hulk come abobrinha com abacate!`

    const letras = frase
                    .toLowerCase()
                    .split(``)
    
    console.log(`letras: `,letras);
    
    let contVogais = 0;
    let contA = 0;
    let contE = 0;
    let contI = 0;
    let contO = 0;
    let contU = 0; 

    //const letras = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`];
    const vogais = [`a`,`e`,`i`,`o`,`u`];
    
    letras.forEach(letra => {
       
        if(letra===`a`) {
            contA++;
            contVogais++;
        }
        if(letra===`e`) {
            contE++;
            contVogais++;
        }
        if(letra===`i`) {
            contI++;
            contVogais++;
        }
        if(letra===`o`) {
            contO++;
            contVogais++;
        }
        if(letra===`u`) {
            contU++;
            contVogais++;
        }
    
    })

    console.log(`Soma de letra(s) A: `,contA);
    console.log(`Soma de letra(s) E:` ,contE);
    console.log(`Soma de letra(s) I:` ,contI);
    console.log(`Soma de letra(s) O:` ,contO);
    console.log(`Soma de letra(s) U:` ,contU);
    console.log(`Total de Vogais:` ,contVogais);
    console.log(`Total de letra(s):` ,letras.length);

    
}


main();
