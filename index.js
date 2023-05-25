function converter() {
    // Obter os valores de entrada de temperatura em Fahrenheit e Celsius
    let fahrenheit = document.getElementById("fahrenheit").value;
    let celsius = document.getElementById("celsius").value;
  
    // Verificar se um dos campos de temperatura foi preenchido
    if (fahrenheit || celsius) {
      // Se o valor de Fahrenheit foi preenchido, converter para Celsius
      if (fahrenheit) {
        // Restringir o valor máximo e mínimo da temperatura em Fahrenheit
        if (fahrenheit < -459.67 || fahrenheit > 1000) {
          document.getElementById("resultado").innerHTML = "Por favor, insira uma temperatura válida entre -459.67 e 1000 graus Fahrenheit.";
        } else {
          let celsiusResultado = (fahrenheit - 32) * 5 / 9;
          document.getElementById("celsius").value = celsiusResultado.toFixed(2);
  
          // Alterar a cor de fundo do body se a temperatura em Celsius for maior que 30 graus
          if (celsiusResultado > 30) {
            let cores = ["blue", "orange"];
            let corAleatoria = cores[Math.floor(Math.random() * cores.length)];
            document.body.style.backgroundColor = corAleatoria;
          } else {
            document.body.style.backgroundColor = "white";
          }
        }
      } else { // Se o valor de Celsius foi preenchido, converter para Fahrenheit
        // Restringir o valor máximo e mínimo da temperatura em Celsius
        if (celsius < -273.15 || celsius > 538.89) {
          document.getElementById("resultado").innerHTML = "Por favor, insira uma temperatura válida entre -273.15 e 538.89 graus Celsius.";
        } else {
          let fahrenheitResultado = (celsius * 9 / 5) + 32;
          document.getElementById("fahrenheit").value = fahrenheitResultado.toFixed(2);
  
          // Alterar a cor de fundo do body se a temperatura em Celsius for maior que 30 graus
          if (celsius > 30) {
            let cores = [function converter() {
                // Obter os valores de entrada de temperatura em Fahrenheit e Celsius
                let fahrenheit = document.getElementById("fahrenheit").value;
                let celsius = document.getElementById("celsius").value;
              
                // Verificar se um dos campos de temperatura foi preenchido
                if (fahrenheit || celsius) {
                  // Se o valor de Fahrenheit foi preenchido, converter para Celsius
                  if (fahrenheit) {
                    // Restringir o valor máximo e mínimo da temperatura em Fahrenheit
                    if (fahrenheit < -459.67 || fahrenheit > 1000) {
                      document.getElementById("resultado").innerHTML = "Por favor, insira uma temperatura válida entre -459.67 e 1000 graus Fahrenheit.";
                    } else {
                      let celsiusResultado = (fahrenheit - 32) * 5 / 9;
                      document.getElementById("celsius").value = celsiusResultado.toFixed(2);
              
                      // Alterar a cor de fundo do body se a temperatura em Celsius for maior que 30 graus
                      if (celsiusResultado > 30) {
                        let cores = ["blue", "orange"];
                        let corAleatoria = cores[Math.floor(Math.random() * cores.length)];
                        document.body.style.backgroundColor = corAleatoria;
                      } else {
                        document.body.style.backgroundColor = "white";
                      }
                    }
                  } else { // Se o valor de Celsius foi preenchido, converter para Fahrenheit
                    // Restringir o valor máximo e mínimo da temperatura em Celsius
                    if (celsius < -273.15 || celsius > 538.89) {
                      document.getElementById("resultado").innerHTML = "Por favor, insira uma temperatura válida entre -273.15 e 538.89 graus Celsius.";
                    } else {
                      let fahrenheitResultado = (celsius * 9 / 5) + 32;
                      document.getElementById("fahrenheit").value = fahrenheitResultado.toFixed(2);
              
                      // Alterar a cor de fundo do body se a temperatura em Celsius for maior que 30 graus
                      if (celsius > 30) {
                        let cores = ["blue", "orange"];
                        let corAleatoria = cores[Math.floor(Math.random() * cores.length)];
                        document.body.style.backgroundColor = corAleatoria;
                      } else {
                        document.body.style.backgroundColor = "white";
                      }
                    }
                  }
                } else {
                  // Se nenhum dos campos foi preenchido, mostrar uma mensagem de erro
                  document.getElementById("resultado").innerHTML = "Por favor, insira uma temperatura em Fahrenheit ou Celsius.";
                }
              }];
            let corAleatoria = cores[Math.floor(Math.random() * cores.length)];
            document.body.style.backgroundColor = corAleatoria;
          } else {
            document.body.style.backgroundColor = "white";
          }
        }
      }
    } else {
      // Se nenhum dos campos foi preenchido, mostrar uma mensagem de erro
      document.getElementById("resultado").innerHTML = "Por favor, insira uma temperatura em Fahrenheit ou Celsius.";
    }
  }
  