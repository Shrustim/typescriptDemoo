import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToogleDiv from "./components/ToogleDiv";
import FormsInType from "./components/FormsInType";
import CustomHookExample from "./components/CustomHookExample";
import { LifecycleMethod, Information ,LifecycleMethodWithFunction} from "./components/LifeCycleMethods";
import { ReactSEOMetaTags } from 'react-seo-meta-tags'
const siteMetadata={
  url: 'https://google.com/about',
  title:  'This is a 70 character long title with a lot of padding to make it so!',
  datePublished: '2019-10-06T13:56:03.123Z',
  description: 'This is a 200 character long description of this web page which is quite interesting and which describes its contents well with a lot of relevant keywords and isn\'t just general marketing mumbo-jumbo.',
  language: 'en-US',
  image: 'https://miro.medium.com/max/640/1*0ZhzN-2EUXmov3HHwOjKCQ.pnghttp://website.com/image.png',
  author: {
    email: 'person@gmail.com',
    name: 'John Smith',
    image: 'https://miro.medium.com/max/640/1*0ZhzN-2EUXmov3HHwOjKCQ.png',
  },
  site: {
    siteName: 'IMDb',
    searchUrl: 'https://www.google.com/search?q=',
  }
}
function App() {
  return (
    <div className="App">
      <ReactSEOMetaTags
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
    />
      <header className="App-header">
      <ToogleDiv/>
      <FormsInType/>
      <LifecycleMethod initialValue={0} />
      <Information />
      <LifecycleMethodWithFunction initialValue={0} />
      <CustomHookExample/>
      </header>
    </div>
  );
}

export default App;
