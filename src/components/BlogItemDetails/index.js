// Write your JS code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItem: [], loading: true}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const newData = {
      id: data.id,
      author: data.author,
      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
      content: data.content,
    }
    console.log(data)
    this.setState({blogItem: newData, loading: false})
  }

  render() {
    const {blogItem, loading} = this.state
    const {imageUrl, content, topic, title, author, avatarUrl} = blogItem
    return loading ? (
      <div testid="loader">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    ) : (
      <div>
        <div className="cen">
          <img className="image" src={imageUrl} alt="img" />
          <div className="row">
            <div>
              <img className="image-2" src={avatarUrl} alt="img" />
              <p>{topic}</p>
            </div>
            <div>
              <h1>{title}</h1>
              <p>{author}</p>
            </div>
          </div>
        </div>
        <p>{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
