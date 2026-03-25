const botao = document.getElementById('btn-converter')
const btnInverter = document.getElementById('btn-inverter')




//Inverter Cotações
btnInverter.addEventListener('click', function() {
    const origem = document.getElementById('moeda-origem')
    const destino = document.getElementById('moeda-destino')
    const temp = origem.value
    origem.value = destino.value
    destino.value = temp
})

// -----------------------------------------------------------------
botao.addEventListener('click', function() {
    const valor = document.getElementById('valor').value
    const moedao = document.getElementById('moeda-origem').value
    const moedad = document.getElementById('moeda-destino').value

    const resultado = document.getElementById('resultado')
    const erro = document.getElementById('erro')

    resultado.classList.add('hidden')
    erro.classList.add('hidden')

    async function fetchData(url) {
  try {
    // Await the fetch call to get the Response object
    const response = await fetch(url);

    // Check if the request was successful (status in the 200-299 range)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Await the response.json() call to parse the body
    const data = await response.json();
    const taxa = data.conversion_rates[moedad]
    const taxan = (valor * taxa).toFixed(2)

    resultado.textContent = `${valor} ${moedao} = ${taxan} ${moedad}`
    resultado.classList.remove('hidden')

  } catch (error) {
        erro.textContent = 'Erro ao buscar cotação. Tente novamente.'
        erro.classList.remove('hidden')
        console.error(error)
    }
}

// Call the async function and handle the returned promise
fetchData(`https://v6.exchangerate-api.com/v6/1e163c38d7e5e5d1c6623b30/latest/${moedao}`);


})