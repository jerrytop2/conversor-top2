# Conversor real de cotações!

Um conversor de moedas que fiz pra praticar consumo de API, back-end com Node .

## O que ele faz

Digite um valor, escolhe a moeda de origem e de destino, clica em converter. Tem um botão pra inverter as moedas também, que é bem útil.

## Tecnologias

- HTML, CSS e JavaScript puro no front(vou pegar o react depois)
- Node.js + Express no back-end
- API da [ExchangeRate-API](https://www.exchangerate-api.com/) pra pegar as cotações em tempo real

## Como rodar localmente

Precisa ter o Node instalado.

```bash
# clona o repositório
git clone https://github.com/jerrytop2/conversor-top2.git

cd conversor

# instala as dependências
npm install

# cria o arquivo .env com sua chave
echo "API_KEY=sua_chave_aqui" > .env

# sobe o servidor
node server.js
```

Depois é só acessar o local host.

Pra conseguir uma chave gratuita, cria conta em [exchangerate-api.com](https://www.exchangerate-api.com/).

## Moedas disponíveis

USD, EUR, BRL, GBP e JPY — por enquanto...

