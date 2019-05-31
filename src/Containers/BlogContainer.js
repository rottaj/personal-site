import React from 'react'
import Navbar from '../Components/Navbar'
import Blog from '../Components/Blog'
import Grid from '@material-ui/core/Grid'
import BottomSocialNav from '../Components/bSocialNav'

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
            <Grid item xs={12}>
                <Navbar/>
                {this.state.blogs.map(blog => <Blog blog={blog}/>) }           
            </Grid>
            <BottomSocialNav/>
            </div>
        )
    }
}