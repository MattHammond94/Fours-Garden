import ArtworkNavBar from "../components/ArtworkNavBar";
import ItemTemplate from "../components/ItemTemplate";

const Prints = () => {
  const printsData = [
    { url: '/Prints/XX.jpg', title: 'XX', description: 'Relief ink and indian ink on card', lowResUrl: '/Prints/XX-blur.jpg' },
    { url: '/Prints/Trans.jpg', title: 'Trans', description: 'Gouache and relief ink on card', lowResUrl: '/Prints/Trans-blur.jpg' },
    { url: '/Prints/XY.jpg', title: 'XY', description: 'Relief ink and indian ink on card', lowResUrl: '/Prints/XY-blur.jpg' },
    { url: '/Prints/Lukewarm.jpg', title: 'Lukewarm', description: 'Relief ink on newsprint', lowResUrl: '/Prints/Lukewarm-blur.jpg' },
    { url: '/Prints/ExitWounds.jpg', title: 'Exit Wounds', description: 'Relief ink on acetate', lowResUrl: '/Prints/ExitWounds-blur.jpg' },
    { url: '/Prints/BongWater.jpg', title: 'Bong Water', description: 'Relief ink on newsprint', lowResUrl: '/Prints/BongWater-blur.jpg' },
    { url: '/Prints/LoveBites.jpg', title: 'Love Bites', description: 'Gouache, relief ink and indian ink on paper', lowResUrl: '/Prints/LoveBites-blur.jpg' },
    { url: '/Prints/SplitScreen.jpg', title: 'Split Screen', description: 'Gouache, relief ink and indian ink on paper', lowResUrl: '/Prints/SplitScreen-blur.jpg' },
    { url: '/Prints/BioMass.jpg', title: 'Fragile', description: 'Gouache and indian ink on paper', lowResUrl: '/Prints/BioMass-blur.jpg' },
    { url: '/Prints/FourStrikes.png', title: "Four Strikes and You're Out", description: 'Relief ink on card', lowResUrl: '/Prints/FourStrikes-blur.png' }
  ]

  return (
    <div>
      <ArtworkNavBar variant="prints" />
      <div className="items-container">
        <ItemTemplate variant="prints" itemData={ printsData }/>
      </div>
    </div>
  )
}

export default Prints