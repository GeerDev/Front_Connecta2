import AddPost from './AddPost/AddPost' 
import Posts from './Posts/Posts'

import './Home.css';

const Home = () => {

  return (
    <div className='home'>
    <AddPost />
    <Posts />
    </div>
  )
  
}

export default Home