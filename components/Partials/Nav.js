// Nav.js
import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Nav extends Component {

  handleClick(){
    $('.navOverlay').hide();
  }

  closeMe(){
    $('.navOverlay').hide();
  }

  showMe() {
    $('.navOverlay').show();
  }



  render(){
    
    const data = this.props.data
    const nav_items = data.globals.nav_items
    
    // Prevent initial null
    if(!nav_items){
      return <div></div>
    }

    const menu_items = nav_items.map(( nav_item ) => {
      return (
        <li key={ 'key-' + nav_item.value }>
          <Link onClick={ this.handleClick } to={ '/' + nav_item.value }>{ nav_item.title }</Link>
        </li>
      )
    })

    const style = {
      cursor: 'pointer'
    }

    return (
      <div>
        <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
          <div className="container-fluid">
              <img style={style} onClick={ this.showMe } src='https://cosmicjs.com/uploads/6769e9c0-043d-11e7-9730-f928dcc5c05d-menu.svg'/>
            <div className="navbar-header">
              <a className="navbar-brand logo" href="/">Apologue</a>
            </div>
          </div>
        </nav> 
        <div className='navOverlay'>
          <div className='container-fluid row'>
            <div className='col-xs-8'>
              <h3>Elsewhere</h3>
              <ul >
                { menu_items }
              </ul>
            </div>
            <div className='col-xs-4'>
              <img style={style} onClick={ this.closeMe } src='https://cosmicjs.com/uploads/0ea1d170-04e4-11e7-a5a9-ffe74738971e-Cross.svg'/>
            </div>
          </div>
        </div>
      </div>

    )
  }
}