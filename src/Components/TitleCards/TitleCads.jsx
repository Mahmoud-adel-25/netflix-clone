import './TitleCads.css'
// import cards_data from '../../assets/cards/Cards_data'
// دي كانت الي ملف الي فيه الداتا بتاعت الافلام الصور و ال الاسماء قبل ما اجيب ال {api}
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
const TitleCads = ({title , category}) => {
  const cardsRef = useRef()
  const [apiData , setapiData] = useState([])
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDkwYWZjYzQ3NTBlZWRhYjM4OGUwYWNiMGQ2MDdmYyIsIm5iZiI6MTc5NDA1MDEyNC4wNzgsInN1YiI6IjZhZWYwODRjYmVjYmNhZjE1YjVjZTA2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iWopyg3pbK57aqMIaXJ4omr-PwxhhkQQaGn0ESzcgag'
  }
};
const handlwheel = (e) => {
  e.preventDefault()
  cardsRef.current.scrollLeft += e.deltaY
 }
useEffect(() => {
  cardsRef.current.addEventListener('wheel', handlwheel),
fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setapiData(res.results))
  .catch(err => console.error(err));
} ,[])
  return (
    <div className='Title-Cards' >
      <h2>{title ? title:"Popular On NetFlix"}</h2>
      <div className="card-list" ref={cardsRef} >
        {apiData.map((card , index ) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={'https://image.tmdb.org/t/p/w500'+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TitleCads
