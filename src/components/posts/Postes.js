import Post from '../post/Post';
import './Postes.scss'

const Postes = () => {

    const posts = [
        {
          id: 1,
          name: "Paddy T",
          userId: 1,
          profilePic:
            "https://images.pexels.com/photos/4668513/pexels-photo-4668513.jpeg?auto=compress&cs=tinysrgb&w=600",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          img: "https://images.pexels.com/photos/1261731/pexels-photo-1261731.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: 2,
          name: "Veeri J",
          userId: 2,
          profilePic:
            "https://images.pexels.com/photos/4668509/pexels-photo-4668509.jpeg?auto=compress&cs=tinysrgb&w=600",
          desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
          img: "https://images.pexels.com/photos/14181536/pexels-photo-14181536.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 3,
            name: "lahsiv",
            userId: 2,
            profilePic:
              "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
            img: "https://images.pexels.com/photos/3741382/pexels-photo-3741382.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
      ];

  return (
    <div className='postes'>
      {
        posts.map((post)=>(
            <Post post={post} key={post.id}/>
        ))
      }
    </div>
  )
}

export default Postes
