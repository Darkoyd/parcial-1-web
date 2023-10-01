import { useEffect, useState } from "react"
import { getAll, getById } from "../api/CoffeeService"
import { FormattedMessage, FormattedDate } from "react-intl"

const Coffee = () => {
    const [cafes, setCafes] = useState([])
    const [selected, setSelected] = useState()

    useEffect(() => {
        const fetchCoffees = async () => {
            const fetch = await getAll()
            setCafes(fetch.data)
        }
        fetchCoffees()
    }, [])

    const handleElementClick = async (id) => {
        const fetch = await getById(id)
        setSelected(fetch.data)
    }



    return (
        <div className="flex flex-row gap-10">
            <table className="table-auto w-[70%]">
                <thead className="bg-[#333A40] text-white font-bold">
                    <tr className="">
                        <th className="p-4 text-left">#</th>
                        <th className="p-4 text-left"><FormattedMessage id='name' /></th>
                        <th className="p-4 text-left"><FormattedMessage id='type' /></th>
                        <th className="p-4 text-left"><FormattedMessage id='region' /></th>
                    </tr>
                </thead>
                <tbody>
                    {cafes.map((el) => (
                        <tr key={el.id} className="border-t hover:cursor-pointer" onClick={() => handleElementClick(el.id)}>
                            <td className="font-bold">{el.id}</td>
                            <td>{el.nombre}</td>
                            <td>{el.tipo}</td>
                            <td>{el.region}</td>
                        </tr>

                    ))}
                </tbody>

            </table>
            {selected ?
                <div className="border-2 bg-[#e0bbbb] bg-opacity-20 flex flex-col place-items-center">
                    <div className="font-bold">{selected.nombre.toUpperCase()}</div>
                    <div className="text-sm">{selected.fecha_cultivo ? <FormattedDate value={selected.fecha_cultivo} /> : <FormattedDate id='nd' />}</div>
                    <div><img src={selected.imagen} alt={selected.imagen} width={150}></img></div>
                    <div className="text-sm"><FormattedMessage id="notes" /></div>
                    <div className="text-sm">{selected.notas}</div>
                    <div className="font-bold"><FormattedMessage id="grownAt" /> {selected.altura} <FormattedMessage id="seaLevel" /></div>
                </div> : ''}
        </div>
    )
}

export default Coffee