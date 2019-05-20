import React from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'gatsby' // eslint-disable-line no-unused-vars
import Header from '../components/header' // eslint-disable-line no-unused-vars

export default () => (
  <div style={{ color: 'teal' }}>
    <Link to="/">Home</Link>
    <Header headerText='Contact' />
    <p>Send us a message.</p>
  </div>
)
