import React from 'react'

const InstaContext = React.createContext({
  url: '',
  updateUrl: () => {},
  currentPage: 'home',
  changePage: () => {},
  showOptions: false,
  updateShowOptions: () => {},
  showSearchBar: false,
  updateShowSearchBar: () => {},
})

export default InstaContext
