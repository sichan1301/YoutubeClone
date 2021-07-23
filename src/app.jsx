import { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';

function App() {
  const [videos,setVideos] = useState([]); 

  useEffect(()=>{     //마운트가 되었거나 업데이트가 될 때 콜백함수 등록
  const requestOptions = {
  method: 'GET',
  redirect: 'follow'   //fetch를 사용하면서 request를 할 때 옵션을 전달하는 것 
  };

  fetch("https://youtube.googleapis.com/youtube/v3\n/videos?key=AIzaSyCMEmeJkTqTovrbM6ryqVoF4qEX44S2IsA&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCMEmeJkTqTovrbM6ryqVoF4qEX44S2IsA"
      , requestOptions)
    .then(response => response.json())
    .then(result => setVideos(result.items))
    .catch(error => console.log('error', error));
  },[]);
  
  return(
    <div className={styles.app}>
      <SearchHeader />
      <VideoList videos = {videos} />;
    </div>
  );
}

export default App;
