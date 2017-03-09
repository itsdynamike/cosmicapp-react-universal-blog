// Blog.js
import React, { Component } from 'react'
import _ from 'lodash'
import config from '../../config'

// Components
import Header from '../Partials/Header'
import BlogList from '../Partials/BlogList'
import BlogSingle from '../Partials/BlogSingle'

// Dispatcher
import AppDispatcher from '../../dispatcher/AppDispatcher'

export default class Blog extends Component {

  componentWillMount(){
    this.getPageData()
  }

  componentDidMount(){
    const data = this.props.data
    document.title = config.site.title + ' | ' + data.page.title
  }

  getPageData(){
    AppDispatcher.dispatch({
      action: 'get-page-data',
      page_slug: 'blog',
      post_slug: this.props.params.slug
    })
  }

  getMoreArticles(){
    AppDispatcher.dispatch({
      action: 'get-more-items'
    })
  }

  render(){

    const data = this.props.data
    const globals = data.globals
    const pages = data.pages
    let main_content

    if(!this.props.params.slug){

      main_content = <BlogList getMoreArticles={ this.getMoreArticles } data={ data }/>

    } else {

      const articles = data.articles
      
      // Get current page slug
      const slug = this.props.params.slug
      const articles_object = _.indexBy(articles, 'slug')
      const article = articles_object[slug]
      main_content = <BlogSingle  data={ data } article={ article } />

    }
    
    return (
      <div>
        { main_content }
      </div>
    )
  }
}