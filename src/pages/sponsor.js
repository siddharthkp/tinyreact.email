import React from "react"

function Sponsor(props) {
  return (
    <main>
      <h1>Sponsor tinyreact</h1>
      <p>Stats for last 4 issues:</p>
      <ul>
        <li>3097 subscribers</li>
        <li>40% open rate</li>
      </ul>
      <br />
      <p>Cost: $400 for 4 issues</p>
      <br />
      <p>
        I try to keep the sponsor copy simple like the rest of the newsletter,{" "}
        <a href="https://tinyreact.email/2020-10-20">here's an example</a>.
      </p>
      <p>
        If you have any questions, feel free to reach out to me via{" "}
        <a href="https://sid.st/email">email</a> or{" "}
        <a href="https://twitter.com/siddharthkp">twitter DM</a>
      </p>
    </main>
  )
}

export default Sponsor
