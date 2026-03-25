
const botao = document.getElementById('btn-converter')
const btnInverter = document.getElementById('btn-inverter')

btnInverter.addEventListener('click', function() {
    const origem = document.getElementById('moeda-origem')
    const destino = document.getElementById('moeda-destino')
    const temp = origem.value
    origem.value = destino.value
    destino.value = temp
})

botao.addEventListener('click', async function() {
    const valor = parseFloat(document.getElementById('valor').value)
    const moedao = document.getElementById('moeda-origem').value
    const moedad = document.getElementById('moeda-destino').value

    const resultado = document.getElementById('resultado')
    const erro = document.getElementById('erro')

    resultado.classList.add('hidden')
    erro.classList.add('hidden')

    try {
        const response = await fetch(
            `/converter?origem=${moedao}&destino=${moedad}&valor=${valor}`
        )

        if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`)

        const data = await response.json()
        const taxa = data.taxa
        const taxan = data.resultado.toFixed(2)

        resultado.innerHTML = `
            <span class="valor-resultado">${valor} ${moedao} = ${taxan} ${moedad}</span>
            <span class="taxa">1 ${moedao} = ${taxa.toFixed(4)} ${moedad}</span>
        `
        resultado.classList.remove('hidden')

    } catch (error) {
        erro.textContent = 'Erro ao buscar cotação. Tente novamente.'
        erro.classList.remove('hidden')
        console.error(error)
    }
})