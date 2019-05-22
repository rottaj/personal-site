import React from 'react'
import Navbar from '../Components/Navbar'
import Blog from '../Components/Blog'

export default class BlogContainer extends React.Component {

    state = {
        blogs: []
    }

    fetchBlogs = () => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jackrotta12')
            .then(res => res.json())
            .then(data => this.setState({blogs: data.items}))
    }

    componentDidMount() {
        this.fetchBlogs()
    }
    
    render() {
        console.log(this.state)
        return (
            <div>
                <Navbar/>
                {this.state.blogs.map(blog => <Blog blog={blog}/>) }           
            </div>
        )
    }
}