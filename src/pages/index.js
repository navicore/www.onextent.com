import React from 'react' // eslint-disable-line no-unused-vars
import Header from '../components/header' // eslint-disable-line no-unused-vars
import { Link } from 'gatsby' // eslint-disable-line no-unused-vars

export default () => (
  <div style={{ color: 'purple' }}>
    <Link to="/contact/">Contact</Link> 
    <Header headerText='Hello Gatsby?'/>
    <Header headerText='What a world.'/>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)
