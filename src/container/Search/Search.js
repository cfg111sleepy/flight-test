import React from 'react'
import TitleSearch from '../../components/TitleSearch/TitleSearch'
import InputSearch from '../../components/InputSearch/InputSearch'
import SearchWrapper from '../../components/SearchWrapper/SearchWrapper';

const Search = () => {
    return (
        <SearchWrapper>
            <TitleSearch>
                ПОИСК РЕЙСА
            </TitleSearch>
            <InputSearch placeholder='Город' />
        </SearchWrapper>
    )
}

export default Search