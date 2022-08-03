import React,{useState} from 'react'
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,FacebookShareButton,TwitterShareButton
} from "react-share";

export default function ToogleDiv() {
    const [isToogle,setToogle] = useState(true);
  return (
    <div style={{display:"flex"}}>ToogleDiv
        <input type="checkbox" checked={isToogle} onChange={(e:any) => setToogle(isToogle ? false : true) } />
       {isToogle ? <h2>my Name is  SHRUSHTI</h2> : null } 

       <FacebookShareButton
            url={"https://typescript-demo-react.herokuapp.com/"}
            quote={"Demo2"}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <TwitterShareButton
            url={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"}
            title={"Demo1"}
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

    </div>
  )
}
