import { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';

function App({youtube}) {
  const [videos,setVideos] = useState([]); 
  
  const search = query => {
    youtube.search(query).then(videos => setVideos(videos));
  };


  useEffect(()=>{     //마운트가 되었거나 업데이트가 될 때 콜백함수 등록
    youtube.mostPopular().then(videos => setVideos(videos));
  },[]);
  
  return(
    <div className={styles.app}>
      <SearchHeader onSearch ={search} />
      <VideoList videos = {videos} />;
    </div>
  );
}

export default App;
