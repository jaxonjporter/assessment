import React, { Component } from 'react'
import { Link, } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleTabular extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
          <Menu.Item name='Home' as={Link} to='/' active={activeItem === 'Home'} onClick={this.handleItemClick} />
          <Menu.Item name='People' as={Link} to='/people' active={activeItem === 'People'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}