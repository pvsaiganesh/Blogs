// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {blog} = this.props
    const {id, imageUrl, topic, title, author, avatarUrl} = blog
    return (
      <Link to={`/blogs/${id}`}>
        <div className="cen">
          <img className="image" src={imageUrl} alt="img" />
          <div className="row">
            <div>
              <img className="image-2" src={avatarUrl} alt="img" />
              <p>{topic}</p>
            </div>
            <div>
              <p>{title}</p>
              <p>{author}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
export default BlogItem
