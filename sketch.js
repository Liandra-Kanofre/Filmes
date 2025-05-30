  // alice no pais das maravilhas (10)
  // aladdin (10)
  //enrolados (10)
  // simplesmente acontece (14)
  // guardiões da galáxia 3 (12)
  // crepusculo (14)
let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 450);
  createSpan("Sua idade: ");
  campoIdade = createInput("5");
  campoIdade.position(20, 130);

  campoFantasia = createCheckbox(" Gosta de fantasia?");
  campoFantasia.position(20, 150);
  
  campoAventura = createCheckbox("Gosta de aventura?");
  campoAventura.position(20, 170);
  
  textAlign(CENTER, CENTER);
  textSize(32);
}

function draw() {
  background(300,100,100);
  let idade = parseInt(campoIdade.value());
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();

  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (isNaN(idade)) {
    return "Digite uma idade válida!";
  }

  if (idade < 10) {
    if (gostaDeFantasia && gostaDeAventura) {
      return "Encanto (LIVRE), Zootopia (LIVRE) ou Moana (LIVRE)";
    } else if (gostaDeFantasia) {
      return "Encanto (LIVRE) ou Zootopia (LIVRE)";
    } else if (gostaDeAventura) {
      return "Moana (LIVRE) ou Zootopia (LIVRE)";
    } else {
      return "Nenhuma recomendação para essa idade e preferência.";
    }
  } else if (idade >= 10 && idade < 12) {
    if (gostaDeFantasia && gostaDeAventura) {
      return "Alice no País das Maravilhas (10) ou Aladdin (10)";
    } else if (gostaDeFantasia) {
      return "Alice no País das Maravilhas (10) ou Aladdin (10)";
    } else if (gostaDeAventura) {
      return "Harry Potter e a Pedra Filosofal (10)";
    } else {
      return "Nenhuma recomendação para essa idade e preferência.";
    }
  } else if (idade >= 12 && idade < 14) {
    if (gostaDeFantasia && gostaDeAventura) {
      return "Guardiões da Galáxia 3 (12) ou Percy Jackson (12)";
    } else if (gostaDeFantasia) {
      return "Guardiões da Galáxia 3 (12)";
    } else if (gostaDeAventura) {
      return "Percy Jackson (12)";
    } else {
      return "Nenhuma recomendação para essa idade e preferência.";
    }
  } else if (idade >= 14) {
    if (gostaDeFantasia && gostaDeAventura) {
      return "Crepúsculo (14) ou Aladdin (10)";
    } else if (gostaDeFantasia) {
      return "Crepúsculo (14) ou Aladdin (10)";
    } else if (gostaDeAventura) {
      return "Simplesmente Acontece (14)";
    } else {
      return "Simplesmente Acontece (14)";
    }
  } else {
    return "Filme não disponível para essa idade.";
  }
}
