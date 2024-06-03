import React from 'react'

const InstaContext = React.createContext({
  url: '',
  updateUrl: () => {},
})

export default InstaContext
