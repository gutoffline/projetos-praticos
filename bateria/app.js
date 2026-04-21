function tocarSom(e){
    const codigoLetra = e.keyCode;
	if(codigoLetra == 65){
		document.querySelector("#som-65").currentTime = 0
		document.querySelector("#som-65").play()
	}
}

