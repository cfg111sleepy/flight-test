import styled from 'styled-components'

const ButtonSearch = styled.button`
    text-transform: uppercase;
    font-size: 26px;
    width: 100%;
    top: 0;
    right: 0;
    border: none;
    font-weight: 700
    background: #1eb7ee;
    color: #fff;
    transition: .3s ease-in-out;
    border-radius: 0 80px 0 0;
    text-align: left;
    padding: 0 20px;

    &:hover {
        border-radius: 0 40px 0 0;
    }
    @media (min-width: 992px) {
        width: 200px;
        font-size: 26px;
    }
    @media (min-width: 768px) {
        width: 170px;
    }
`

export default ButtonSearch