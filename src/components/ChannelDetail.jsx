import {useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { fetchFromAPI } from '../utils/API'
import {Videos,  ChannelCard } from "./"
const ChannelDetail = () => {

  const [videos , setVideos] = useState([])
  const [channelDetail,setChannelDetail] = useState(null) 
  const { id } =  useParams();

  useEffect(() => {
    const fetchChannelData = async () => {
      try {
        const channelResponse = await fetchFromAPI(`channels?part=snippet&id=${id}`);
        const videoResponse = await fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`);

        setChannelDetail(channelResponse?.items[0]);
        setVideos(videoResponse?.items);
      } catch (error) {
        console.error("Error fetching channel data:", error);
        
      }
    };

    fetchChannelData();
  }, [id]);

  return (
    <Box minHeight = "95vh">
      <Box>
      <div style={{
        background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
        zIndex: 10,
        height: '300px'
      }} />

         {channelDetail && (
          <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
        )}
      </Box>

      <Box display="flex" p="2">
        <Box sx={{mr:{sm:'100px'}}} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail
