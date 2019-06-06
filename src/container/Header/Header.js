import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'


const FullHeader = () => {
    return (
        <Header>
            Kyiv international airport
            <Navbar>
                <span>Пассажирам</span>
                <span>Услуги IEV</span>
                <span>VIP</span>
                <span>Партнерам</span>
            </Navbar>
        </Header>
    )
}
export default FullHeader