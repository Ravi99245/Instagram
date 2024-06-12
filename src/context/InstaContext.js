import React from 'react'

const InstaContext = React.createContext({
  url: '',
  updateUrl: () => {},
  currentPage: 'home',
  changePage: () => {},
  showOptions: false,
  updateShowOptions: () => {},
})

export default InstaContext
