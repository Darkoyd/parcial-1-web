import { useState } from "react"

const Coffee = () => {
    const [cafes, setCafes] = useState([])
    const [selected, setSelected] = useState({})



    return (
        <div className="flex flex-col">
            <div className="flex flex-row">
                <div>ID</div>
                <div>Nombre</div>
                <div>Tipo</div>
                <div>Región</div>
            </div>
            {
                cafes.map(el => (
                    <div className="flex-row" id={el.id} onClick={setSelected(el)}>
                        <div>{el.id}</div>
                        <div>{el.nombre}</div>
                        <div>{el.tipo}</div>
                        <div>{el.region}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Coffee