import styled from 'styled-components'

const Navbar = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 992px) {
        display: none;
    }

`

export default Navbar