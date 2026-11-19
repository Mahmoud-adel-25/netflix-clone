import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Player = () => {
  const Navigate = useNavigate()
  const {id} =useParams()
  const [ApiData, SetApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type:""
  })
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDkwYWZjYzQ3NTBlZWRhYjM4OGUwYWNiMGQ2MDdmYyIsIm5iZiI6MTc5NDA1MDEyNC4wNzgsInN1YiI6IjZhZWYwODRjYmVjYmNhZjE1YjVjZTA2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iWopyg3pbK57aqMIaXJ4omr-PwxhhkQQaGn0ESzcgag'
  }
};

  useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => SetApiData(res.results[0]))
  .catch(err => console.error(err));
    
  })

  return (
    <div className='Player' >
      <img src={back_arrow_icon} alt=""  onClick={()=>{Navigate('/')}} />
      <iframe width='90%' height='90%'
        src={`https://www.youtube.com/embed/${ApiData.key}`}
        title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{ApiData.published_at.slice(0,10)}</p>
        <p>{ApiData.name}</p>
        <p>{ApiData.type}</p>
      </div>
    </div>
  )
}

export default Player
