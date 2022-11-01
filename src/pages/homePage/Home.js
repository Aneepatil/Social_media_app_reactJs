import Postes from '../../components/posts/Postes'
import Stories from '../../components/stories/Stories'
import  './Home.scss'

const Home = () => {
  return (
    <div className='home'>
     <Stories/>
     <Postes/>
    </div>
  )
}

export default Home
