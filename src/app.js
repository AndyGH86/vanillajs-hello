let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];

    function generateDomainNames(pronoun, adj, noun) {
      const domainNames = [];

      for (let p of pronoun) {
        for (let a of adj) {
          for (let n of noun) {
            const domainName = `${p}${a}${n}.com`;
            domainNames.push(domainName);
          }
        }
      }

      return domainNames;
    }

    // Función para mostrar los resultados en la página web
    function displayResults() {
      const domainNames = generateDomainNames(pronoun, adj, noun);
      const resultsList = document.getElementById('results');

      // Limpiar la lista de resultados
      resultsList.innerHTML = '';

      // Agregar cada nombre de dominio a la lista
      domainNames.forEach((name) => {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        resultsList.appendChild(listItem);
      });
    }

    // Agregar un evento click al botón para generar los nombres de dominio
    const generateButton = document.getElementById('generateButton');
    generateButton.addEventListener('click', displayResults);
