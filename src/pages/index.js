import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import FetchingExample from '../containers/FetchingExample'
import AllProjects from '../containers/AllProjects'
import SignOut from '../containers/SignOut'

const IndexPage = () => (
  <Layout>
    <h1>College Shoutouts</h1>
    <p>It's college decision season &mdash; one of the most stressful periods of time. I am incredibly grateful for my friends who have supported me. So, I decided to make this as a gift for anyone worried about the future!</p>
    <p>The rules are simple: click on the link below to leave the gift of encouragement (either for a person or in general). If you need to here these words, just read through and browse what people are saying.</p>
    <Link to="/submit/">Submit Encouragement!</Link><br />
    <Link to="/view/">View Encouragement!</Link><br /><br />
    <h3>Hack Club Challenge</h3>
    <p>Hi challenge participants. Originally, I was going to shout out my friend individually. However, I wanted to open it up for everyone to submit. My submission for the challenge is linked here.</p>
  </Layout>
)

export default IndexPage
