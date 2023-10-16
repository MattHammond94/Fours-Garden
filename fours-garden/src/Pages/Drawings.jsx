import ArtworkNavBar from '../components/ArtworkNavBar';
import ItemTemplate from '../components/ItemTemplate';

const Drawings = () => {

  return (
    <div>
      <ArtworkNavBar variant='drawings'/>
      <div className="items-container">
        <ItemTemplate variant="drawings"/>
      </div>
    </div>
  )
}

export default Drawings