import React from 'react'
import { Link }                         from 'react-router-dom'
import ToggleArrivalDepartureWrapper    from '../../components/ToggleArrivalDepartureWrapper/ToggleArrivalDepartureWrapper'


const ToggleArrivalDeparture = () => {
    return (
        <ToggleArrivalDepartureWrapper>
            <Link
                style={{
                    color: '#1eb7ee',
                    backgroundColor: '#fff',
                    borderColor: '#dee2e6',
                    transition: '.3s ease-in-out',
                    outline: 'none',
                    padding: '0',
                    border: '0',
                    fontSize: '24px',
                    lineHeight: '60px',
                    paddingRight: '100px',
                    borderRadius: '60px 60px 0 0!important',
                    cursor: 'default',
                    zIndex: '1',
                    background: '#fff'
                }} 
                to='departure'>Вылет</Link>
            <Link 
                style={{
                    color: '#1eb7ee',
                    backgroundColor: '#fff',
                    borderColor: '#dee2e6',
                    transition: '.3s ease-in-out',
                    outline: 'none',
                    padding: '0',
                    border: '0',
                    fontSize: '24px',
                    lineHeight: '60px'
                }} 
                to='/arrival'>Прилет</Link>
        </ToggleArrivalDepartureWrapper>
    )
}

export default ToggleArrivalDeparture