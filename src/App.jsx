import { useState, useEffect } from "react"
import Header from "./components/Header"
import Button from "./components/Button"
import { formaterarDinero, calcularTotalPagar } from "./helpers"


function App() {
  const [cantidad, setCantidad] = useState(5000)
  const [meses, setMeses] = useState(6)
  const [total, setTotal] = useState(0)
  const [pago, setPago] = useState(0)

  useEffect(() => {
    const resultadoTotalPagar = calcularTotalPagar(cantidad, meses)
    setTotal(resultadoTotalPagar)


  }, [cantidad, meses])

  useEffect(() => {
    // Calcular el pago mensual
    setPago(total / meses)
  }, [total])

  const MIN = 0
  const MAX = 20000
  const STEP = 100

  function handleChangeCantidad(event) {
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

  function handleChangeMeses(event) {
    setMeses(Number(event.target.value))
  }


  // const saludo = "Hola Mundo"

  return (


    <div>
      <h1 className="max-w-lg text-center my-6 px-5 py-3 text-4xl font-bold text-gray-700 bg-white mx-auto">Cotizador de Créditos</h1>

      <div className="my-6 max-w-lg mx-auto bg-white shadow p-10">
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
          className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600 cursor-pointer"
          onChange={handleChangeCantidad}
          min={MIN}
          max={MAX}
          step={STEP}
          value={cantidad}
        />
        <p
          className="text-center my-10 text-5xl font-extrabold text-indigo-600">{formaterarDinero(cantidad)}
        </p>
        <h2
          className="text-2xl font-extrabold text-gray-500 text-center">
          Elige un <span className="text-indigo-600">Plazo</span> a pagar
        </h2>
        <select
          className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
          value={meses}
          onChange={handleChangeMeses}
        >
          <option value="6">6 Meses</option>
          <option value="12">12 Meses</option>
          <option value="24">24 Meses</option>
        </select>
        <div className="my-5 space-y-3 bg-gray-50 p-5">
          <h2
            className="text-2xl font-extrabold text-gray-500 text-center">
            Resumen <span className="text-indigo-600">de pagos</span>
          </h2>
          <p className="text-xl text-gray-500 text-center font-bold">{meses} Meses</p>
          <p className="text-xl text-gray-500 text-center font-bold">{formaterarDinero(total)} Total a pagar</p>
          <p className="text-xl text-gray-500 text-center font-bold">{formaterarDinero(pago)} Mensuales</p>
        </div>
      </div>
    </div>

    // <h1 className='text-6xl font-extrabold p-10 bg-blue-600 text-white'>{saludo}</h1>
  )
}


export default App


