# Revisão HTML
TAG // Comando // Código

< abrir >  </ fechar >
```
<p> parágrafo </p>
```
no P eu abro e fecho

já no BR eu não preciso fechar

```
<br>
```

## Código base
! + [ENTER]

```html
<!DOCTYPE html>
<html lang="pt-br"><!-- mudar de en para pt-br -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

## TAGs de texto
```html
<p>parágrafo</p>
<br> quebra de linha
<h1></h1> título ... <h6> PRIORIDADE 
<strong></strong> importante (<b></b>)
<em></em> destaque (<i></i>)
<blockquote></blockquote> citação
<ul></ul> lista com marcadores
<ol></ol> lista com numeradores
<li></li> item da lista
<a href="https://sp.senac.br">clique</a> link
```

## Mídia
```html
<video>
  <source src="horse.mp4" type="video/mp4">  
</video>
<audio></audio>
<audio controls>
  <source src="horse.mp3" type="audio/mpeg">
</audio>
<img src="foto.jpg" alt="descrição da imagem"> imagem
```

## Tabela
```html
<table></table> começar e terminar a tabela
<tr></tr> linha
<td></td> célula
<th></th> cabeçalho da coluna
coslpan="2" mescla 2 células

<table border="1">
    <tr>
        <td colspan="2">Cadastro de alunos</td>
    </tr>
    <tr>
        <th>Aluno</th>
        <th>Nota</th>
    </tr>
    <tr>
        <td>Juca</td>
        <td>7.0</td>
    </tr>
</table>
```

## Formulário
```html
<form></form> começa e termina um formulário
<input> campo
<input type="text"> campo de texto
<input type="password"> campo de senha
<input type="checkbox"> campo de checagem (quadradinho)
<input type="radio"> campo de rádio (bolinha)
<select> </select> caixa de combinação/drop down
<option></option> item da caixa de combinação
<button></button> botão
<button type="submit"></button> botão de envio
<button type="reset"></button> botão de limpar
<button type="button"></button> botão personalizado
<textarea></textarea>

<form>
    Usuário:<input type="text"><br>
    Senha: <input type="password"><br>
    <select>
        <option>Admin</option>
        <option>Operador</option>
    </select><br>
    <input type="checkbox"> Manter logado <br>
    <button type="submit">Entrar no sistema</button>
</form>
```

## Estrutura
```
<span></span> permanece na linha
<div></div> bloqueia a linha
```

### Semântica
```html
<main></main> substiui <div id="principal"></div>
<header></header> substitui <div id="cabecalho"></div>
<footer></footer> substitui <div id="rodape"></div>
<nav></nav> substitui <div id="menu"></div>

