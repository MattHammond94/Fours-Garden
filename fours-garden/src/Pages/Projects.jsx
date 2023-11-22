import ArtworkNavBar from '../components/ArtworkNavBar';
import ItemTemplate from '../components/ItemTemplate';

const Projects = () => {
  return (
    <div>
      <ArtworkNavBar variant="other" />
      <div className="items-container">
        <ItemTemplate variant="other"/>
      </div>
    </div>
  )
}

export default Projects