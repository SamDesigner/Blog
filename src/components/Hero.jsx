import React, { useEffect , useState } from 'react'
import Icon from '../assets/images/blog.svg'
import Thumbnail from '../assets/images/table.jpg'
import { ReactTyped } from "react-typed";
import {createClient} from 'contentful'
const Hero = () => {
   const [blogPosts , setBlogPosts] = useState([])
   const client = createClient({space: "kdg5ze81rofh" , accessToken: "MWP7_TL4bb-VENTpHGRwAuFBCM3SkxulR_e1nMbT9t0"})  

    useEffect(()=> {
        const getAllBlogs = async() => {
            try{
                await client.getEntries().then((entries)=> {
                    // console.log(entries)
                    setBlogPosts(entries)
                    console.log(entries)
                    
                })
            }
            catch(error){
                console.log(error)
            }

        }
        getAllBlogs()
    
    },[])
  return (
    <div className='py-[80px] px-[16px] hero_bg'>
        <div className='max-w-[1440px] mx-auto'>
            <div className=''>
              

                <div className='flex-1 flex flex-col gap-[20px]'>
                    <div className='flex flex-col gap-[12px] '>
                        <h1 className='text-[40px] font-[600]'>
                            
                            
                            <ReactTyped
                            className='text-black'
                            strings={['Top Stories', 'Check it out' , 'Dope Articles' ]}
                            typeSpeed={80}
                            loop
                        />
                        </h1>

                    </div>
                    <div className='flex h-[500px] '>
                        <div className='h-full flex-1 bg-white'>
                            <div className='h-full w-full relative'>
                                <img className='h-full w-full object_cover rounded-tl-[40px]' src={blogPosts?.items?.length > 0 && blogPosts.items[0].fields.blogImage.fields.file.url} />
                                <div className='overlay rounded-tl-[40px]'>
                                    <div className='flex items-end h-full '>
                                        <div className=' pb-[100px] smooth_gradient px-[20px] w-full'>
                                            <h3 className='text-white text-[40px] font-[500px]'>    {blogPosts?.items?.length > 0 && blogPosts.items[0]?.fields.blogTitle}</h3>
                                            <h3 className='underline text-white cursor-pointer'>Read more</h3>
                                        </div>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='h-full flex-1 grid grid-cols-1'>
                            <div className='h-[250px] w-full flex-1 relative'>
                                <img className='h-full w-full object_cover rounded-tr-[40px]' src={blogPosts?.items?.length > 0 && blogPosts.items[1].fields.blogImage.fields.file.url}  />
                                <div className='overlay rounded-tr-[40px]'>
                                    <div className='h-full flex items-end pb-[40px]'>
                                        <div className='px-[14px]'>
                                            <h3 className='text-white text-[20px]'>{blogPosts?.items?.length > 0 && blogPosts.items[1].fields.blogTitle }</h3>
                                            <h3 className='underline text-white cursor-pointer'>Read more</h3>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                            <div className='h-[250px] w-full flex-1 relative'>
                                <img className='h-full w-full object_cover'  src={blogPosts?.items?.length > 0 && blogPosts.items[2].fields.blogImage.fields.file.url}   />
                                <div className='overlay'>
                                    <div className='h-full flex items-end pb-[40px]' >
                                        <div className='px-[14px]'>
                                            <h3 className='text-white text-[20px]'>{blogPosts?.items?.length > 0 && blogPosts.items[2].fields.blogTitle }</h3>
                                            <h3 className='underline text-white cursor-pointer'>Read more</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                      

                </div>

            </div>
        </div>
    </div>
  )
}

export default Hero