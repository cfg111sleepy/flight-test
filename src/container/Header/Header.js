import React        from 'react'
import Header       from '../../components/Header/Header'
import Navbar       from '../../components/Navbar/Navbar'
import NavElement   from '../../components/Navbar/NavElement'
 

const FullHeader = () => {
    return (
        <Header>
            Kyiv international airport
            <Navbar>
                <NavElement>Пассажирам</NavElement>
                <NavElement>Услуги IEV</NavElement>
                <NavElement>VIP</NavElement>
                <NavElement>Партнерам</NavElement>
            </Navbar>
        </Header>
    )
}
export default FullHeader