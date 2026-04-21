function ValidarContato(){
	var nome = document.querySelector("#nome").value;
	var email = document.querySelector("#email").value;
	var mensagem = document.querySelector("#mensagem").value;

	if(nome == ""){
		alert("NOME VAZIO");
		return false;
	}

	if(email == ""){
		alert("EMAIL VASIO");
		return false;
	}

	if(mensagem == ""){
		alert("MENSAGEM VASIA");
		return false;
	}

		return true;
}

function ValidarCadastro(){
	return false;
	//var nome = document.querySelector("#nome").value;
/*
	var email = document.querySelector("#email").value;
	var telefone = document.querySelector("#telefone").value;
	var celular = document.querySelector("#celular").value;
	var endereco = document.querySelector("#endereco").value;
	var cidade = document.querySelector("#cidade").value;
	var estado = document.querySelector("#estado").value;
	var mensagem = document.querySelector("#mensagem").value;
*/
	if(nome == ""){
		alert("PREENCHA O CAMPO NOME");
		return false;
	}

/*
	if(email == ""){
		alert("PREENCHA O CAMPO EMAIL");
		return false;
	} 

	if(telefone == ""){
		alert("PREENCHA O CAMPO TELEFONE");
		return false;
	}

	if (celular == ""){
		alert("PREENCHA O CAMPO CELULAR");
		return false;
	}

	if(endereço == ""){
		alert("PREENCHA O CAMPO ENDEREÇO");
		return false;
	}

	if(cidade == ""){
		alert("PREENCHA O CAMPO CIDADE");
		return false;
	}

	if(estado == ""){
		alert("PREENCHA O CAMPO ESTADO");
		return false;
	}

	if(mensagem == ""){
		alert("PREENCHA O CAMPO MENSAGEM");
		return false;
	}

	*/

	return true;
}