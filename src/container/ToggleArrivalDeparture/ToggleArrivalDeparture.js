import React, { useState }              from 'react'
import { Link }                         from 'react-router-dom'
import ToggleArrivalDepartureWrapper    from '../../components/ToggleArrivalDepartureWrapper/ToggleArrivalDepartureWrapper'


const ToggleArrivalDeparture = () => {

    const [ active, setActive ] = useState(true)

    return (
        <ToggleArrivalDepartureWrapper>
            <Link
                onClick={() => setActive(true)}
                className={active ? 'linkActiveFirst' : 'linkFirst'} 
                to='departure'>Вылет</Link>
            <Link 
                onClick={() => setActive(false)}
                className={active ? 'linkSecond' : 'linkActiveSecond' }
                to='/arrival'>Прилет</Link>
        </ToggleArrivalDepartureWrapper>
    )
}

export default ToggleArrivalDeparture