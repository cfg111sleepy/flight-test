import React, {useState}from 'react'
import TitleSearch      from '../../components/TitleSearch/TitleSearch'
import InputSearch      from '../../components/InputSearch/InputSearch'
import SearchWrapper    from '../../components/SearchWrapper/SearchWrapper'
import ButtonSearch     from '../../components/ButtonSearch/ButtonSearch'

const Search = (props) => {

    const { searchFligth } = props

    const [fligth, setFligth] = useState('')

    const handleSearch = (event) => {
        searchFligth(fligth)
    }

    return (
        <SearchWrapper>
            <div style={{
                justifyContent: 'center'
            }}>    
                <TitleSearch>
                    ПОИСК РЕЙСА
                </TitleSearch>
                <div style={{
                    display: 'flex'
                }}>
                    <InputSearch 
                        placeholder='Город или номер рейса'
                        onChange={(event) => setFligth(event.target.value)}
                    />
                    <ButtonSearch onClick={handleSearch} >
                        Найти
                    </ButtonSearch>
                </div>
            </div>
        </SearchWrapper>
    )
}

export default Search