import {useEffect , useState} from 'react'
import Thumbnail from '../assets/images/table.jpg' 
import { BsChatLeftDotsFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import {createClient} from 'contentful'
import { Link } from 'react-router-dom';
import Hero from './Hero.jsx'
const Blogs = () => {
    const [blogPosts , setBlogPosts] = useState([])
    const client = createClient({space: "kdg5ze81rofh", accessToken: "MWP7_TL4bb-VENTpHGRwAuFBCM3SkxulR_e1nMbT9t0"})
    useEffect(()=>{
        const getAllEntries = async () => {
            try{
                await client.getEntries().then((entries)=>{
                    // console.log(entries)    
                    setBlogPosts(entries)
                })
            }
            catch(error) {
                console.log(error)
            }
        }
        getAllEntries()
    
    }, [])
  
return (
    <>
    <Hero />
    <div className='px-[16px] py-[112px]'>

        <div className='max-w-[1440px] mx-auto flex flex-col gap-[20px]'>
            <h2 className='text-[28px] font-[500] '>Latest articles</h2>
            <div className='grid grid-cols-3 gap-[30px]'>
            {blogPosts?.items?.map((post) => 
              
                <div className='shadow-lg ' key={post.sys.id}>
                    
                    <div className='h-[250px] '>
                        <img className=' h-full w-full object_cover' src={post.fields.blogImage.fields.file.url} alt={Thumbnail} />
                    </div>
                    <div className='px-3 py-[30px] flex flex-col gap-[10px]'> 
                        <div className='flex justify-between'>
                            <p className='text-[12px] text-gray-500 flex gap-[8px] items-center'>
                                <span className='text-sm text-gray-300'><FaUserCircle /></span>
                                {post.fields.blogAuthor }
                            </p>
                            <p className='text-[12px] text-gray-600'>{post.fields.createdDate}</p>
                        </div>
                        <div className='flex items-center gap-[10px]'>
                           
                            <h1 className='text-[21px] font-[500]'>{post.fields.blogTitle}</h1>
                        </div>

                        <p className='text-gray-500 text-sm'>
                            {post.fields.blogSummary}
                        </p>

                        <Link to={`/blogdetail/${post.sys.id}`} className='bg-black text-white py-2 px-4 rounded-2xl w-fit'>Read More</Link>
                    </div>
                </div>

            )}
            </div>  
        </div>
    </div>
    </>
  )
}

export default Blogs