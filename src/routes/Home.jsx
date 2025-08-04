import {useFetch} from '../hooks/useFetch'
import {Link} from 'react-router-dom'

const url = "http://localhost:3000/animal_galery"



const Home = () => {
  const {data: items} = useFetch(url)

  return (
    <div>
      hello
    </div>
    
  )
}

export default Home