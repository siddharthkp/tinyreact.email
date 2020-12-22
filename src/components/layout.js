import React from "react"
import "../style.css"

class Layout extends React.Component {
  render() {
    const { location, title, children, date } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header = null

    if (location.pathname === rootPath) {
      header = <h1>{title}</h1>
    } else {
      header = (
        <>
          <h3>{date}</h3>
          <h1>3 curated React resources for the week:</h1>
        </>
      )
    }

    return (
      <div>
        <header>{header}</header>
        <main>{children}</main>
      </div>
    )
  }
}

export default Layout
