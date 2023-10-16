import ArtworkNavBar from '../components/ArtworkNavBar';
import ItemTemplate from '../components/ItemTemplate';

const OtherProjects = () => {
  return (
    <div>
      <ArtworkNavBar variant="other" />
      <div className="items-container">
        <ItemTemplate variant="other"/>
      </div>
    </div>
  )
}

export default OtherProjects