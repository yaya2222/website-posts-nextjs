import { getPost } from "@/services/post"
import Post from "@/types/Post"
import Link from "next/link"

interface PostView{
  params:{
    postId:string
  }
}

const ViewPostPage = async (props:PostView)=>{
  const {postId} = props.params
  const post:Post =await getPost(postId)
  const {title,body} = post
    return (
      <>
      <header className="flex items-center mb-6">
        <h1>{title}</h1>
        <Link href={`/posts/${postId}/edit`} className="btn ml-auto">Edit</Link>
        <button className="btn--red ml-4">Delete</button>
      </header>
      <p>{body}</p>
      </>
    )
  }
  
  export default ViewPostPage