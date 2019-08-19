import React from 'react'
import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux'
import { getData } from './action'
const HomeHoc = WrapComponer => props => {
  return <WrapComponer {...props} />
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getData
    },
    dispatch
  )
const mapStateToProps = ({ homeReducer }) => {
  return {
    homeData: homeReducer
  }
}
const composedHoc = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  HomeHoc
)
export default composedHoc
