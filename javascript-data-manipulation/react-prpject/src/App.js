/* eslint-disable react/react-in-jsx-scope */

import { carros } from "./carros";

//lista os nomes dos carros
function listCarrs () {
  return carros.map((c) => console.log(c.name))

}
listCarrs()

//soma os valores dos carros
const reduceCarrsValues = carros.reduce((prev,next) => {return (prev+ next.value)}, 0)

console.log('o valor total dos carros é:',reduceCarrsValues)

//retorna os carros da marca FIAT
function filterCarrs () {
  return (console.log(carros.filter((c) => c.brand === 'FIAT')))
}

filterCarrs()

//demonstra o valor de cada carro
const carrosFor = () => {
  carros.forEach((c) => {
    return (
      console.log(`o carro ${c.name} possui valor de ${c.value}`)
    )
  })
}

carrosFor()

function App() {
  return (
  <p>Abra o console para ver os dados manipulados</p>
  );
}

export default App;
