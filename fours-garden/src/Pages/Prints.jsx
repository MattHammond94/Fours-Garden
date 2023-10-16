import ArtworkNavBar from "../components/ArtworkNavBar";
import ItemTemplate from "../components/ItemTemplate";

const Prints = () => {
  return (
    <div>
      <ArtworkNavBar variant="prints" />
      <div className="items-container">
        <ItemTemplate variant="prints"/>
      </div>
    </div>
  )
}

export default Prints