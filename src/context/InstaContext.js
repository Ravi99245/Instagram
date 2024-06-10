import React from 'react'

const InstaContext = React.createContext({
  url: '',
  updateUrl: () => {},
  currentPage: 'home',
  changePage: () => {},
})

export default InstaContext
