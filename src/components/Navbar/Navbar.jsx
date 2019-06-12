import styled from 'styled-components'

const Navbar = styled.div`
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    @media (max-width: 992px) {
        display: none;
    }

`

export default Navbar