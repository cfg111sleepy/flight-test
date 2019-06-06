import React, { Fragment }                  from 'react'
import Header                               from '../../container/Header/Header'
import Search                               from '../Search/Search'
import { connect }                          from 'react-redux'
import { getFlight }                        from '../../actions/fligthAction'
import { BrowserRouter as Router, Route }   from 'react-router-dom'
import PropTypes                            from 'prop-types'
import ListItem                             from '../ListItem/ListItem'




const App = (props) => {

    const { flights: { arrival, departure } } = props
    
    return (
        <Fragment>
            <Router>
                <Header />
                <Search />
                <Route
                    path='/arrival'
                    exact
                    render={ () => {
                        return  <ListItem 
                                    list={arrival}
                                />
                    } } 
                />
                <Route
                    path='/departure'
                    exact
                    render={ () => {
                        return  <ListItem 
                                    list={departure}
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
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        getFlight: dispatch(getFlight()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

App.prototype = {
    flights: PropTypes.object
}