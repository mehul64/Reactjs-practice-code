import React, { Component } from 'react'
import axios from 'axios'

class ListOfPosts extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       post : [],
       error : ''
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((resp) => {
      this.setState({post : resp.data})
    })
    .catch(error => {
      this.setState({error : 'Error retrieving data'})
    })
  }
  
  
  render() {
    const {post,error} = this.state
    return (
      <div>
        List of post
        {
          post.length ? post.map(post => <div key = {post.id}> {post.title}</div>) : null
        }
        {error ? <div>{error}</div> : null}
      </div>      
    )
  }
}

export default ListOfPosts
