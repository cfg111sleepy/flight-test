import React, { Fragment }                  from 'react'
import Header                               from '../../container/Header/Header'
import Search                               from '../Search/Search'
import { connect }                          from 'react-redux'
import { getFlight }                        from '../../actions/fligthAction'
import { BrowserRouter as Router, Route }   from 'react-router-dom'
import PropTypes                            from 'prop-types'
import ListItem                             from '../ListItem/ListItem'
import ToggleArrivalDeparture               from '../ToggleArrivalDeparture/ToggleArrivalDeparture'
import { searchFligth }                     from '../../actions/searchAction'




const App = (props) => {

    const { flights: { arrival, departure }, searchFligth, search  } = props

    return (
        <Fragment>
            <Router>
                <Header />
                <Search searchFligth={searchFligth} />
                <ToggleArrivalDeparture />
                <Route
                    path='/arrival'
                    exact
                    render={ () => {
                                return  <ListItem 
                                            list={arrival}
                                            search={search}
                                        />
                    } } 
                />
                <Route
                    path='/departure'
                    exact
                    render={ () => {
                                return  <ListItem 
                                            list={departure}
                                            search={search}
                                        />
                    } } 
                />
            </Router>
        </Fragment>
    )
}

const mapStateToProps = store => {
    return {
        flights: store.flightReducer.flights.body,
        search: store.searchReducer.search
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        getFlight: dispatch(getFlight()),
        searchFligth: flight => dispatch(searchFligth(flight))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

App.propTypes = {
    flights: PropTypes.object,
    searchFligth: PropTypes.func
}