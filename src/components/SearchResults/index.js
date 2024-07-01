import {Component} from 'react'

import InstaContext from '../../context/InstaContext'

const apiStatusText = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class SearchResults extends Component {
  state = {apiStatus: apiStatusText.initial, posts: []}

  componentDidMount() {
    this.getPost()
    this.setState({apiStatus: apiStatusText.inProgress})
  }

  render() {
    return <div>Posts</div>
  }
}

export default SearchResults
