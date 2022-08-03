import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToogleDiv from "./components/ToogleDiv";
import FormsInType from "./components/FormsInType";
import CustomHookExample from "./components/CustomHookExample";
import { LifecycleMethod, Information ,LifecycleMethodWithFunction} from "./components/LifeCycleMethods";
// import { ReactSEOMetaTags } from 'react-seo-meta-tags'
// import {Helmet} from "react-helmet";
import DocumentMeta from 'react-document-meta';
// const siteMetadata={
//   url: 'https://google.com/about',
//   title:  'This is a 70 character long title with a lot of padding to make it so!',
//   datePublished: '2019-10-06T13:56:03.123Z',
//   description: 'This is a 200 character long description of this web page which is quite interesting and which describes its contents well with a lot of relevant keywords and isn\'t just general marketing mumbo-jumbo.',
//   language: 'en-US',
//   image: 'https://miro.medium.com/max/640/1*0ZhzN-2EUXmov3HHwOjKCQ.pnghttp://website.com/image.png',
//   author: {
//     email: 'person@gmail.com',
//     name: 'John Smith',
//     image: 'https://miro.medium.com/max/640/1*0ZhzN-2EUXmov3HHwOjKCQ.png',
//   },
//   site: {
//     siteName: 'IMDb',
//     searchUrl: 'https://www.google.com/search?q=',
//   }
// }
const meta = {
  title: 'Some Meta Title',
  description: 'I am a description, and I can create multiple tags',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags'
    },
    og:{
      title:"Test heelllllo i am shrushti",
      url:"https://typescript-demo-react.herokuapp.com/",
      description:"Testhello hiiiii Abc",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png"
    }
  }
 
};
function App() {
  return (
    <DocumentMeta {...meta} >
   
 
    <div className="App">
            {/* <Helmet>
                <meta charSet="utf-8" />
                <meta property="og:title" content="Typescript Sample Demo oo" />
                <meta property="og:site_name" content="Shrushti"/>
                <meta property="og:url" content="https://typescript-demo-react.herokuapp.com/"/>
                <meta property="og:description" content="hello hiiiii Abc"/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png"/>
   
                <title>My Title</title>
                <link rel="canonical" href="https://typescript-demo-react.herokuapp.com/" />
               
            </Helmet> */}
      {/* <ReactSEOMetaTags
      website={{ ...siteMetadata }}
      // breadcrumb={[
      //   { name: 'My Site', url: 'https://me.com' },
      //   { name: 'Blog', url: 'https://me.com/blog' },
      // ]}
      organization={{
        name: 'Google',
        legalName: 'Google Inc',
        url: 'https://google.com',
        logo: 'https://google.com/logo.jpg'
      }}
      // blogPost={{ ...blogPost }}
      // facebook={{ facebookAppId: 'abc123' }}
      // twitter={{ twitterUser: '@mickey_mouse' }}
    /> */}
          

      <header className="App-header">
      <ToogleDiv/>
      <FormsInType/>
      <LifecycleMethod initialValue={0} />
      <Information />
      <LifecycleMethodWithFunction initialValue={0} />
      <CustomHookExample/>
      </header>
    </div>
    </DocumentMeta>
  );
}

export default App;
