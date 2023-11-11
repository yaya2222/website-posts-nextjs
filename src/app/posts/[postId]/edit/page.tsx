import PostForm from "@/components/PostForm"

interface PostView{
  params:{
    postId:string
  }
}

const EditPostPage = (props:PostView)=>{
    return (
      <>
      <header>
        <h1>EditPostPage {props.params.postId}</h1>
        <PostForm />
      </header>
      </>
    )
  }
  
  export default EditPostPage