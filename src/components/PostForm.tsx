"use client"
import { useState } from "react"

const PostForm = ()=>{

const [title,setTitle] = useState<string>("")
const [body,setBody] = useState<string>("")

    return(
        <form>
            {title} {body}
            <div className="poat-form_block">
                <label className="poat-form_lable">Title</label>
                <input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} className="poat-form_input"/>
            </div>
            
            <div className="poat-form_block">
                <label className="poat-form_lable">Body</label>
                <input type="text" placeholder="Body" value={body} onChange={(e)=>setBody(e.target.value)} className="poat-form_input"/>
            </div>
            
            <button type="submit" className="btn">SEND</button>
        </form>
    )
}
export default PostForm