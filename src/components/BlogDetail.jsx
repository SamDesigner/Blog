import React from 'react'
import { useEffect , useState } from 'react'
import {createClient} from 'contentful'
import '../App.css'
import {useParams} from 'react-router-dom'
const BlogDetail = () => {
  const client = createClient({space: "kdg5ze81rofh", accessToken: "MWP7_TL4bb-VENTpHGRwAuFBCM3SkxulR_e1nMbT9t0"})
  const {id} = useParams()
  const [ singleBlogPost , setSingleBlogPost ] = useState([]);
  useEffect(() =>{
    const getEntryById = async()=> {
      try{
        await client.getEntry(id).then((entries)=> {
          setSingleBlogPost(entries)
          
        })
            
      }catch(error){
        console.log(error)
      }
      

    }
    getEntryById()
  } , [])
  console.log(singleBlogPost)
  return (
    <div>
      <div className='w-[80%] mx-auto flex flex-col gap-[20px] pb-[40px]'>
          <div className='h-[500px]'>
              <img className='h-full w-full object_cover' src={singleBlogPost?.fields?.blogImage?.fields?.file?.url} />
          </div>
          <div className='flex flex-col gap-[10px]'>
            <h3 className='text-gray-600 text-sm'>{singleBlogPost?.fields?.blogAuthor}</h3>
            <h1 className='font-[500] text-3xl'>{singleBlogPost?.fields?.blogTitle}</h1>
            <p className='text-gray-600 text-sm leading-8'>
              {singleBlogPost?.fields?.blogContent}
            </p>
          </div>
      </div>
    </div>
  )
}

export default BlogDetail