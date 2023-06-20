import { useState } from "react"
import Header from "./components/Header"
import Button from "./components/Button"
import { formaterarDinero } from "./helpers"



function App() {
  const [cantidad, setCantidad] = useState('5000')

  const MIN = 0
  const MAX = 20000
  const STEP = 100

  function handleChange(event) {
    // console.log(Number(event.target.value));
    setCantidad(Number(event.target.value))
  }

  function handleClickDecremento() {
    const valor = cantidad - STEP

    if (valor < MIN) {
      return
    }
    setCantidad(valor)


  }
  function handleClickIncremento() {
    const valor = cantidad + STEP

    if (valor > MAX) {
      return
    }

    setCantidad(valor)


  }




  // const saludo = "Hola Mundo"

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <div className="flex justify-between my-6">
        <Button
          operador='-'
          fn={handleClickDecremento}
        />
        <Button
          operador='+'
          fn={handleClickIncremento}
        />


      </div>

      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />

      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">{formaterarDinero(cantidad)}</p>
    </div>



    // <h1 className='text-6xl font-extrabold p-10 bg-blue-600 text-white'>{saludo}</h1>
  )
}


export default App


