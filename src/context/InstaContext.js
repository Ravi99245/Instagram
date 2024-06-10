import React from 'react'

const InstaContext = React.createContext({
  url: '',
  updateUrl: () => {},
  current: 'home',
  changePage: () => {},
})

export default InstaContext
