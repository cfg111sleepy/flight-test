import React, { Fragment } from 'react'
import Header from '../../container/Header/Header'
import Search from '../Search/Search'
import { connect } from 'react-redux'
import { getFlight } from '../../actions/fligthAction'



function App() {
    return (
        <Fragment>
            <Header />
            <Search />
        </Fragment>
    )
}

const mapStateToProps = store => {
    console.log(store)
    return {
      store: store
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        getFlight: dispatch(getFlight()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
