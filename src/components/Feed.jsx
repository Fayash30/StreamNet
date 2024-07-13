import {useState , useEffect} from 'react'
import {Box , Stack,Typography} from "@mui/material"
import { Sidebar , Videos} from './'

import { fetchFromAPI } from '../utils/API';

const Feed = () => {

  const [selectedCategory , setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() =>{
      fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.error("Error setting videos:", error));
  }, [selectedCategory])


  return (
    <Stack sx={{flexDirection: {
      sx:'column',md:'row'
    }}}>
      <Box sx ={{height :{ sx : 'auto',md:'92vh'},px:{sx:0,md:2}}}>
      <Sidebar
        selectedCategory = {selectedCategory} 
        setSelectedCategory = {setSelectedCategory}
      />

        <Typography className='copyright' variant="body2" sx={{mt:1.5,color:'#fff'}}> 
            Md. Fayash @ 2024 
        </Typography>
      </Box>

      <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}>
          {selectedCategory} <span style= {{color:"#f31503"}}>
             videos
          </span>
        </Typography>

        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed
