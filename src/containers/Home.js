import React from 'react'
import MarkdownPage from '../components/Markdown'

const Home = (props) => {

  return (
    <div className="main">
      <MarkdownPage path={'pages/home.md'} />
    </div>
  )
}

export default Home
