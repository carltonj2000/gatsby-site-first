import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const ThirdPage = () => (
  <div>
    <Helmet
      title="Gatsby 3"
    />
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default ThirdPage
