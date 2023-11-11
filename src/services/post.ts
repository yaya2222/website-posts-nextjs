export const getPosts = async()=>{
    const response = await fetch('https://dummyjson.com/posts',{
      next:{revalidate:5}
    })
    const data = await response.json()
    return data.posts
  }

  export const getPost = async(postid:string)=>{
    const response = await fetch(`https://dummyjson.com/posts/${postid}`,{
      next:{revalidate:5}
    })
    const data = await response.json()
    return data
  }
