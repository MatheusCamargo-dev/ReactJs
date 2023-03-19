import { useEffect, useState } from 'react'
interface Post{
  id: number;
  title: string;
  body: string;
  img?: string;
}
interface Props{
  post: Post
}
export default function Post(props: Props) {
  const { post } = props;
  
  return (
        <div className="post bg-white">
          <img src={post?.img} alt={post.title} className="w-100"/>
          <div key={post.id} className=' text-dark p-2 text-left'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </div>
  )
}