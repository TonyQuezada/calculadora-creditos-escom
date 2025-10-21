import { useState, useMemo } from 'react'
import './App.css'
import Asignatura from './components/Asignatura'
import BotonSem from './components/BotonSem'
import Footer from './components/Footer'
import isc from './assets/isc.json'
import ia from './assets/ia.json'
import lcd from './assets/lcd.json'

function App() {
  
  const [indiceActual, setIndiceActual] = useState<number>(0)
  const nombreCarreras = ["ISC", "IA", "LCD"]

  const carreras = [isc, ia, lcd]
  const carreraActual = carreras[indiceActual]

  const handleCambioCarrera = () => {
    setIndiceActual(i => (i + 1) % carreras.length)
    setSeleccionadas(new Set())
  }

  const [seleccionadas, setSeleccionadas] = useState<Set<string>>(new Set())  

  function onToggle(materia: string){
    setSeleccionadas(prev => {
      const next = new Set(prev)
      if (next.has(materia)) next.delete(materia)
      else next.add(materia)
      return next
    })
  }

  function onToggleRow(inicio: number, fin: number) {
    const start = Math.max(0, Math.min(inicio, fin))
    const end = Math.min(Math.max(inicio, fin), carreraActual.materias.length - 1)

    const ids: string[] = []
    for (let i = start; i <= end; i++) {
      const item = carreraActual.materias[i]
      if (!item) continue
      if (item.nombre) ids.push(item.nombre)
    }

    if (ids.length === 0) return

    setSeleccionadas(prev => {
      const next = new Set(prev)
      const allSelected = ids.every(id => next.has(id))
      if (allSelected) {
        ids.forEach(id => next.delete(id))
      } else {
        ids.forEach(id => next.add(id))
      }
      return next
    })
  }

  const { sumaTotal, porcentaje } = useMemo(() => {
    const total = carreraActual.materias.reduce((acc, m) => {
      if (!m) return acc
      return seleccionadas.has(m.nombre) ? acc + (Number(m.creditos) || 0) : acc
    }, 0)
    const pct = (total / carreraActual.totalCreditos) * 100
    return { sumaTotal: total, porcentaje: pct }
  }, [seleccionadas, carreraActual.materias])

  return (
    <div
      className=" aspect-14/8 h-screen mx-auto
              rounded-md"
    >
      <div className='w-full h-3/20 py-2'>
        <div className='w-full h-full rounded-xl p-2 flex flex-row items-center justify-center' style={{backgroundColor: "#0A6896"}}>
          <div className='w-7/10 h-full flex flex-col items-center justify-center'>
            <div className='text-center text-white text-4xl font-bold'>Calculadora de Créditos ESCOM</div>
            <button type="button" className='px-7 py-1 m-2 bg-[#3E3E3F] text-white border-2 border-gray-400 cursor-pointer rounded-xl hover:ring-4'
            onClick={handleCambioCarrera}
            >{nombreCarreras[indiceActual]}</button>
          </div>
          <div className='w-3/10 h-full bg-white rounded-xl flex items-center justify-center'>
            <div className='text-2xl'><span className='font-bold'>Créditos</span> = <span className='font-bold text-green-600'>{sumaTotal}</span> / {carreraActual.totalCreditos} = <span className='font-extrabold text-green-600 text-4xl'>{porcentaje.toFixed(2)}%</span></div>
          </div>
        </div>
      </div>

      <div className='w-full h-16/20 flex flex-row py-1'>
        <div className='bg-white w-19/20 h-full rounded-l-xl
                      grid grid-cols-8 grid-rows-8 gap-y-6 gap-x-4 px-8 py-2 stripe-rows'>
          {carreraActual.materias.map((item, index) => {
            if(item){
              return (<Asignatura key={index} color={item.color} nombre={item.nombre} creditos={item.creditos} existe={true}  
                      selected={seleccionadas.has(item.nombre)} onClick={() => onToggle(item.nombre)}
                      />)
            }
            else{
              return (<Asignatura key={index} existe={false} />)
            }
          })}
        </div>
        <div className='bg-[#3E3E3F] w-1/20 h-full rounded-r-xl
                        grid grid-cols-1 items-center text-center text-white font-bold'>
          
      <BotonSem texto='Sem. 8' onClick={()=> onToggleRow(0,7)}/>
      <BotonSem texto='Sem. 7' onClick={()=> onToggleRow(8,15)}/>
      <BotonSem texto='Sem. 6' onClick={()=> onToggleRow(16,23)}/>
      <BotonSem texto='Sem. 5' onClick={()=> onToggleRow(24,31)}/>
      <BotonSem texto='Sem. 4' onClick={()=> onToggleRow(32,39)}/>
      <BotonSem texto='Sem. 3' onClick={()=> onToggleRow(40,47)}/>
      <BotonSem texto='Sem. 2' onClick={()=> onToggleRow(48,55)}/>
      <BotonSem texto='Sem. 1' onClick={()=> onToggleRow(56,63)}/>
        </div>
      </div>

      <Footer/>
      
      
    </div>
  )
}

export default App
