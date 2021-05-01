// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogData: [], loader: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const totalData = await response.json()
    const finalData = totalData.map(data => ({
      id: data.id,
      author: data.author,
      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }))
    this.setState({blogData: finalData, loader: false})
    console.log(finalData)
  }

  render() {
    const {blogData, loader} = this.state
    return (
      <div className="flex-container">
        {loader ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          blogData.map(blog => <BlogItem key={blog.id} blog={blog} />)
        )}
      </div>
    )
  }
}
export default BlogList
