import Avatar from '@mui/material/Avatar'
import React , { forwardRef} from 'react'
import './Post.css';
import RecommendIcon from '@mui/icons-material/Recommend';
import InputOption from './InputOption';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className='post'>
        <div className='post_header'>
            <Avatar src={photoUrl}>{
              name[0]
            } </Avatar>
            <div className='post_info'>
             <h2>{name}</h2> 
             <p>{description}</p> 

            </div>
        </div>
     <div className='post_body'>
        <p>{message}</p>
      </div> 
       < div className='post_buttons'>
        <InputOption Icon={RecommendIcon} title="like" color="gray" />
        <InputOption Icon={CommentIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareIcon} title="Share" color="gray" />
        <InputOption Icon={SendIcon} title="Send" color="gray" />
        

        

     </div>   
    </div>
  );
})

export default Post
