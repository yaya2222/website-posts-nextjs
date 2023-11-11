import PostCard from "@/components/PostCard"
import { getPosts } from "@/services/post"
import Post from "@/types/Post"
import Link from "next/link"

const POSTS=Array.from({length:10})




const  PostsPage = async ()=>{
  
const posts:Post[] = await getPosts()
    return (
      <>
      <header className="flex items-center mb-6">
        <h1>PostsPage</h1>
        <Link href='/posts/new' className="btn ml-auto">New Post</Link>
      </header>

      <ul className="grid grid-cols-3 gap-3">
        {posts.map((post)=>
       <PostCard key={post.id} {...post}/>
        )}
      </ul>
      </>
    )
  }
  
  export default PostsPage