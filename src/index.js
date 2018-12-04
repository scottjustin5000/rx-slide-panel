import React from 'react'
import { render } from 'react-dom'

import SlidePanel from './lib/slide-panel'

class Example extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      docked: true,
      open: true,
      shadow: true
    }
    this.onClick = this.onClick.bind(this)
    this.onClick2 = this.onClick2.bind(this)
  }

  onClick () {
    this.setState({
      docked: false,
      open: false
    }
    )
  }

  onClick2 () {
    this.setState({
      docked: true,
      open: true
    }
    )
  }

  render () {
    const sidebar = () => {
      return (
        <div style={{width: '250px'}}>
          <div>Foo</div>
          <div>Bar</div>
          <div>Whatever</div>
        </div>
      )
    }

    const sidebarProps = {
      sidebar: sidebar(),
      docked: this.state.docked,
      open: this.state.open,
      shadow: this.state.shadow,
      direction: 'left'
    }

    return (
      <SlidePanel {...sidebarProps}>
        <button onClick={this.onClick}>close</button>
        <button onClick={this.onClick2}>open</button>
      </SlidePanel>
    )
  }
}
const container = document.createElement('div')
document.body.appendChild(container)
render(<Example />, container)
