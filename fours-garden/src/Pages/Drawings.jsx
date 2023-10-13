import ArtworkNavBar from '../components/ArtworkNavBar';
import ItemTemplate from '../components/ItemTemplate';

const Drawings = () => {

  return (
    <div>
      <ArtworkNavBar variant='drawings'/>
      <div className="supersniper-container">
        <ItemTemplate />
      </div>
    </div>
  )
}

export default Drawings