import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class SlidePanel extends Component {
  constructor (props) {
    super(props)
    this.sidebarRef = React.createRef()
    this.state = {
      sidebarWidth: props.sidebarWidth
    }

    this.overlayClicked = this.overlayClicked.bind(this)
  }

  componentDidMount () {
    this.setState({
      sidebarWidth: this.sidebarRef.current.offsetWidth
    })
  }

  overlayClicked () {
    if (this.props.open) {
      this.props.toggleOpen(false)
    }
  }

  render () {
    const contentStyle = {}
    const overlayStyle = {}
    if (this.props.docked) {
      if (this.props.side.toLowerCase() === 'right') {
        contentStyle.right = `${this.state.sidebarWidth}px`
      } else {
        contentStyle.left = `${this.state.sidebarWidth}px`
      }
    } else if (this.props.open) {
      overlayStyle.opacity = 1
      overlayStyle.display = 'block'
    }

    return (
      <div className='container'>
        <div
          className={`side-panel-${this.props.side} ${this.props.open ? 'side-panel-open-' + this.props.side : 'side-panel-closed-' + this.props.side} ${this.props.open && this.props.applyShadow ? 'side-panel-shadow-' + this.props.side : ''}`}
          ref={this.sidebarRef}
        >
          {this.props.sidebar}
        </div>
        <div
          className='overlay-content'
          style={overlayStyle}
          onClick={this.overlayClicked}
        />
        <div
          className='main-content'
          style={contentStyle}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

SlidePanel.propTypes = {
  children: PropTypes.node.isRequired,
  sidebar: PropTypes.node.isRequired,
  docked: PropTypes.bool,
  open: PropTypes.bool,
  side: PropTypes.string,
  applyShadow: PropTypes.bool,
  toggleOpen: PropTypes.func,
  sidebarWidth: PropTypes.number
}

SlidePanel.defaultProps = {
  side: 'left',
  docked: false,
  open: false,
  applyShadow: true,
  toggleOpen: () => {},
  sidebarWidth: 0
}

export default SlidePanel
