import styled from 'styled-components'

const SearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    
    @media (min-width: 992px) {
        max-width: 960px;
    }
`

export default SearchWrapper