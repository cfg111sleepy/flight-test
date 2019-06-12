import React, { useState }  from 'react'
import PropTypes            from 'prop-types'
import ButtonDay            from '../../components/ButtonDay/ButtonDay'
import DateWrapper          from '../../components/DateWrapper/DateWrapper'
import TableWrapper         from '../../components/TableWrapper/TableWrapper'
import HeadRow              from '../../components/Table/HeadRow'
import Table                from '../../components/Table/Table'
import Item                 from '../../components/Item/Item'

const ListItem = (props) => {

    const { search } = props

    console.log(search)

    const [today, setToday] = useState(true)
    const [yesterday, setYesterday] = useState(false)
    const [tomorrow, setTomorrow] = useState(false)

    const handleToday = () => {
        setToday(true)
        setYesterday(false)
        setTomorrow(false)
    }

    const handleYesterday = () => {
        setToday(false)
        setYesterday(true)
        setTomorrow(false)
    }

    const handleTomorrow = () => {
        setToday(false)
        setYesterday(false)
        setTomorrow(true)
    }

    const { list } = props
    const dateObj = new Date()
    const month = dateObj.getUTCMonth() + 1
    const day = dateObj.getUTCDate()
    const year = dateObj.getUTCFullYear()

    const todayList = list.filter( item => {
        const date = item.actual.split('T')
        const todaySort = `${year}-0${month}-${day}`
        return date[0] === todaySort 
    })

    const yesterdayList = list.filter( item => {
        const date = item.actual.split('T')
        const yesterdaySort = `${year}-0${month}-${day-1}`
        return date[0] === yesterdaySort 
    })

    const tomorrowList = list.filter( item => {
        const date = item.actual.split('T')
        const tomorrowSort = `${year}-0${month}-${day+1}`
        return date[0] === tomorrowSort 
    })

    const elementToday = todayList.map(item => <Item key={item.ID} item={item} /> )

    const elementYesterday = yesterdayList.map(item => <Item key={item.ID} item={item} /> )

    const elementTomorrow = tomorrowList.map(item => <Item key={item.ID} item={item} /> )

    const searchFligthToday = todayList.filter(item => {
        const flight = `${item['carrierID.IATA']}${item.fltNo}`
        return  item['airportToID.city_ru'] === search || 
                item['airportFromID.city_ru'] === search || 
                flight === search
    })

    const searchFligthYesterdey = yesterdayList.filter(item => {
        const flight = `${item['carrierID.IATA']}${item.fltNo}`
        return  item['airportToID.city_ru'] === search || 
                item['airportFromID.city_ru'] === search || 
                flight === search
    })

    const searchFligthTomorrow = tomorrowList.filter(item => {
        const flight = `${item['carrierID.IATA']}${item.fltNo}`
        return  item['airportToID.city_ru'] === search || 
                item['airportFromID.city_ru'] === search || 
                flight === search
    })

    const elementSearchFligthToday = searchFligthToday.map(item => <Item key={item.ID} item={item} /> )

    const elementSearchFligthYesterdey = searchFligthYesterdey.map(item => <Item key={item.ID} item={item} /> )
    
    const elementSearchFligthTomorrow = searchFligthTomorrow.map(item => <Item key={item.ID} item={item} /> )


    return (
        <TableWrapper>
            <DateWrapper>
                <ButtonDay className={yesterday ? 'styleButton' : null} onClick={handleYesterday} >Yesterday</ButtonDay>
                <ButtonDay className={today ? 'styleButton' : null} onClick={handleToday} >Today</ButtonDay>
                <ButtonDay className={tomorrow ? 'styleButton' : null} onClick={handleTomorrow} >Tomorrow</ButtonDay>
            </DateWrapper>
            <Table>
                <thead>
                    <HeadRow>
                        <th>Терминал</th>
                        <th>Время</th>
                        <th>Место назначения</th>
                        <th>Статус</th>
                        <th>Авиакомпания</th>
                        <th>Рейс</th>
                    </HeadRow>
                </thead>
                <tbody>
                    { today ? (search ? elementSearchFligthToday : elementToday) : null }
                    { yesterday ? (search ? elementSearchFligthYesterdey : elementYesterday) : null }
                    { tomorrow ? (search ? elementSearchFligthTomorrow :  elementTomorrow) : null }
                </tbody>
            </Table>
        </TableWrapper>
    )
}

export default ListItem

ListItem.propTypes = {
    list: PropTypes.array
}
