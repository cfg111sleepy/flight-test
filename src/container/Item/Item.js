import React                    from 'react'
import TableRow                 from '../../components/Table/TableRow'
import TableD                   from '../../components/Table/TableD'
import NotifacationComponent    from '../Notification/Notification'

const Item = ({ item }) => {

    const arrayDate = item.actual.split('T') 
    const date = arrayDate[1].slice(0, -1)

    return (
        <TableRow>
            <TableD>{item.term}</TableD>
            <TableD>{date}</TableD>
            <TableD>{item['airportToID.city_ru']}{item['airportFromID.city_ru']}</TableD>
            <TableD>{item.status}</TableD>
            <TableD>{item.airline.ua.name}</TableD>
            <TableD>{item['carrierID.IATA']}{item.fltNo}</TableD>
            <TableD><NotifacationComponent date={date} /></TableD>
        </TableRow>
    )
}

export default Item