function encryptWithFunction(message, encryptionFunction) {
  // Verifica se a função inserida é afim (ax + b) ou de segundo grau (ax^2 + bx + c)
  text = "Função de Encriptar";
  console.log(text);
  //console.log(createInverseFunction.apply(encryptionFunction));
  if (encryptionFunction.match(/^(\d*)[ ]*x[ ]*([+-]?[ ]*\d+)?$/)) {
    const [, a, b] = encryptionFunction.match(
      /^(\d*)[ ]*x[ ]*([+-]?[ ]*\d+)?$/
    );
    const coefA = a ? parseInt(a) : 1;
    const coefB = b ? parseInt(b) : 0;

    // Implemente a criptografia da mensagem usando a função afim
    const encryptedMessage = [];
  

    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      if (char.match(/[a-zA-Z]/)) {
        const charCode = char.charCodeAt(0);
        let encryptedCharCode;
        let ValueK;

        console.log("Char:" + charCode);
        if (char.match(/[A-Z]/)) {
          //Divide pelo maximo e soma pelo minimo
          // A    *     x           +   B
          encryptedCharCode = ((coefA * (charCode - 65) + coefB) % 26) + 65;
          ValueK = ((coefA * (charCode - 65) + coefB) / 26) + 65;

          // % 26 para manter dentro do range da tabela ascii
          console.log("Encrypted Char:" + encryptedCharCode + " " + ValueK);
        } else {
          encryptedCharCode = ((coefA * (charCode - 97) + coefB) % 26) + 97;
          
          ValueK = ((coefA * (charCode - 97) + coefB) / 26) + 97;

          console.log("Encrypted Char:" + encryptedCharCode + " " + ValueK);
        }

        encryptedMessage.push(String.fromCharCode(ValueK));
        encryptedMessage.push(String.fromCharCode(encryptedCharCode));
      } else {
        encryptedMessage.push(char);
      }
    }

    return encryptedMessage.join("");
  } else if (
    encryptionFunction.match(
      /^(\d*)[ ]*x\^2[ ]*([+-]?[ ]*\d*)[ ]*x[ ]*([+-]?[ ]*\d+)?$/
    )
  ) {
    const [, a, b, c] = encryptionFunction.match(
      /^(\d*)[ ]*x\^2[ ]*([+-]?[ ]*\d*)[ ]*x[ ]*([+-]?[ ]*\d+)?$/
    );
    const coefA = a ? parseInt(a) : 1;
    const coefB = b ? parseInt(b) : 0;
    const coefC = c ? parseInt(c) : 0;

    // Implemente a criptografia da mensagem usando a função de segundo grau
    const encryptedMessage = [];
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      if (char.match(/[a-zA-Z]/)) {
        const charCode = char.charCodeAt(0);
        let encryptedCharCode;
        let ValueK;

        console.log("Char:" + charCode);
        if (char.match(/[A-Z]/)) {
          encryptedCharCode = ((coefA * Math.pow(charCode - 65, 2) + coefB * (charCode - 65) + coefC) % 26) + 65;
          ValueK = (coefA * Math.pow(charCode - 65, 2) + coefB * (charCode - 65) + coefC) / 26 + 65;

          console.log("Encrypted Char:" + encryptedCharCode + " " + ValueK);
         
        } else {
          encryptedCharCode =
            ((coefA * Math.pow(charCode - 97, 2) +
              coefB * (charCode - 97) +
              coefC) %
              26) +
            97;
            ValueK = (coefA * Math.pow(charCode - 97, 2) + coefB * (charCode - 97) + coefC) / 26 + 97;

            console.log("Encrypted Char:" + encryptedCharCode + " " + ValueK);
        }

        encryptedMessage.push(String.fromCharCode(ValueK));
        encryptedMessage.push(String.fromCharCode(encryptedCharCode));
      } else {
        encryptedMessage.push(char);
      }
    }

    return encryptedMessage.join("");
  } else {
    return "Função não reconhecida. Insira uma função afim ou de segundo grau válida.";
  }
}

function decryptWithFunction(message, encryptionFunction) {
  // Verifica se a função inserida é afim (ax + b) ou de segundo grau (ax^2 + bx + c)
  text = "Função de Encriptar";
  console.log(text);
  //console.log(createInverseFunction.apply(encryptionFunction));
  if (encryptionFunction.match(/^(\d*)[ ]*x[ ]*([+-]?[ ]*\d+)?$/)) {
    const [, a, b] = encryptionFunction.match(
      /^(\d*)[ ]*x[ ]*([+-]?[ ]*\d+)?$/
    );
    const coefA = a ? parseInt(a) : 1;
    const coefB = b ? parseInt(b) : 0;

    // Implemente a criptografia da mensagem usando a função afim
    const encryptedMessage = [];
    let booleanK = true;
    let ValueK = 0;


    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if(booleanK == true){
        ValueK = char.charCodeAt(0);
        booleanK = false;
      } else if (char.match(/[a-zA-Z]/)) {
        booleanK = true;

        const charCode = char.charCodeAt(0);
        let encryptedCharCode;

        console.log("Char:" + charCode);
        if (char.match(/[A-Z]/)) {
          // Inversa x - b / a
          //encryptedCharCode = (((charCode - 65) - coefB) / coefA) + 65 ;
          let ValueY = (((ValueK - 65) * 26) + ( charCode - 65));
          encryptedCharCode =   ((ValueY - coefB) / coefA) + 65;
          //x = ((y - coefB - 97 + 26 * k) / coefA) + 97
          // % 26 para manter dentro do range da tabela ascii
          console.log("Decrypted Char:" + encryptedCharCode);
        } else {
            let ValueY = (((ValueK - 97) * 26) + ( charCode - 97));
            encryptedCharCode =   ((ValueY - coefB) / coefA) + 97;
          console.log("Decrypted Char:" + encryptedCharCode);
        }

        encryptedMessage.push(String.fromCharCode(encryptedCharCode));
      } else {
        encryptedMessage.push(char);
      }
    }

    return encryptedMessage.join("");
    
  } else if (
    encryptionFunction.match(
      /^(\d*)[ ]*x\^2[ ]*([+-]?[ ]*\d*)[ ]*x[ ]*([+-]?[ ]*\d+)?$/
    )
  ) {
    const [, a, b, c] = encryptionFunction.match(
      /^(\d*)[ ]*x\^2[ ]*([+-]?[ ]*\d*)[ ]*x[ ]*([+-]?[ ]*\d+)?$/
    );
    const coefA = a ? parseInt(a) : 1;
    const coefB = b ? parseInt(b) : 0;
    const coefC = c ? parseInt(c) : 0;

    // Implemente a criptografia da mensagem usando a função de segundo grau
    const encryptedMessage = [];
    let booleanK = true;
    let ValueK;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if(booleanK ==true){
        ValueK = char.charCodeAt(0);
        booleanK = false;
      }else if (char.match(/[a-zA-Z]/)) {
        booleanK = true;

        const charCode = char.charCodeAt(0);
        let encryptedCharCode;
        console.log("Char:" + charCode);

        if (char.match(/[A-Z]/)) {
            let ValueY = (((ValueK - 65) * 26) + ( charCode - 65));
            encryptedCharCode = (-coefB + Math.sqrt(coefB * coefB - 4 * coefA * (coefC - ValueY))) / (2 * coefA) + 65;

            console.log("Decrypted Char:" + encryptedCharCode);
        } else {

            let ValueY = (((ValueK - 97) * 26) + ( charCode - 97));
            encryptedCharCode = (-coefB + Math.sqrt(coefB * coefB - 4 * coefA * (coefC - ValueY))) / (2 * coefA) + 97;

            console.log("Decrypted Char:" + encryptedCharCode);
        }

        encryptedMessage.push(String.fromCharCode(encryptedCharCode));
      } else {
        encryptedMessage.push(char);
      }
    }

    return encryptedMessage.join("");
  } else {
    return "Função não reconhecida. Insira uma função afim ou de segundo grau válida.";
  }
}


document.getElementById("encrypt").addEventListener("click", function () {
  const message = document.getElementById("message").value;
  const encryptionFunction =
    document.getElementById("encryptionFunction").value;
  const encryptedMessage = encryptWithFunction(message, encryptionFunction);
  document.getElementById("encryptedMessage").textContent = encryptedMessage;
});

document.getElementById("decrypt").addEventListener("click", function () {
  const message = document.getElementById("message").value;
  const encryptionFunction =
    document.getElementById("encryptionFunction").value;
  const encryptedMessage = decryptWithFunction(message, encryptionFunction);
  document.getElementById("encryptedMessage").textContent = encryptedMessage;
});
