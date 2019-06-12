import React    from 'react'
import TableRow from '../../components/Table/TableRow'
import TableD   from '../../components/Table/TableD'


const Item = ({ item }) => {

    return (
        <TableRow>
            <TableD>{item.term}</TableD>
            <TableD>{}</TableD>
            <TableD>{item['airportToID.city_ru']}{item['airportFromID.city_ru']}</TableD>
            <TableD>{item.status}</TableD>
            <TableD>{item.airline.ua.name}</TableD>
            <TableD>{item['carrierID.IATA']}{item.fltNo}</TableD>
        </TableRow>
    )
}

export default Item