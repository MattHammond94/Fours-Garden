import { useState } from "react";
import Modal from "./Modal";

const ItemTemplate = ({ variant }) => {
  const [modalOpenStatus, setModalOpenStatus] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const drawingsData = [
    { url: '/Drawings/Venus.jpg', title: 'Venus Fly Trap', description: 'Pencil, relief ink and photoshop', },
    { url: '/Drawings/Vice.jpg', title: 'Vice', description: 'Pencil, relief ink and photoshop', },
    { url: '/Drawings/BoysDoNotCry.jpg', title: 'Boys Do Not Cry', description: 'Pencil, relief ink and photoshop', },
    { url: '/Drawings/Woeful.jpg', title: 'Sorrow', description: 'Pencil, relief ink and photoshop', },
    { url: '/Drawings/Desecration.jpg', title: 'Desecrate The Corpse', description: 'Pencil, relief ink and photoshop', },
    { url: '/Drawings/Detachment.jpg', title: 'Detachment', description: 'Pencil, relief ink and photoshop', },
    { url: '/Drawings/EphergyToAKing.jpg', title: 'Ephergy To A King', description: 'Pencil, relief ink and photoshop', },
    { url: '/Drawings/Pillar.jpg', title: 'The Pillar of Creation', description: 'Pencil, relief ink and photoshop', },
    { url: '/Drawings/Happiness.jpg', title: 'Happiness Interrupted', description: 'Pencil, relief ink and photoshop', },
    { url: '/Drawings/Boudica.jpg', title: 'Boudica', description: 'Pencil, relief ink and photoshop', },
    { url: '/Drawings/Slipstream.jpg', title: 'Slipstream', description: 'Pencil, relief ink and photoshop', },
    { url: '/Drawings/Playing.jpg', title: 'Playing With Fire', description: 'Pen and ink on paper', },
    { url: '/Drawings/Deception.jpg', title: 'Deception', description: 'Pen and ink on paper', },
    { url: '/Drawings/QueenBee.jpg', title: 'Queen Bee', description: 'Pen and ink on paper', },
    { url: '/Drawings/JellyFishKiss.jpg', title: 'Jellyfish Kiss', description: 'Pen and ink on paper', },
    { url: '/Drawings/Magic.jpg', title: 'Cloak and Dagger', description: 'Pen and ink on paper', },
    { url: '/Drawings/Autumn.jpg', title: 'Autumn', description: 'Pen and ink on paper', },
    { url: '/Drawings/Fisherman.jpg', title: 'Gone Fishing', description: 'Pen and ink on paper', },
    { url: '/Drawings/Amadeus.jpg', title: 'Amadeus', description: 'Pen and ink on paper', },
    { url: '/Drawings/BigBrother.jpg', title: 'No Matter What', description: 'Pen and ink on paper', },
    { url: '/Drawings/LeadHeart.jpg', title: 'Lead Heart', description: 'Pen and ink on paper', },
    { url: '/Drawings/LittleSister.jpg', title: 'Innocence', description: 'Pen and ink on paper', },
    { url: '/Drawings/Migraines.jpg', title: 'Migraines', description: 'Pen and ink on paper', },
    { url: '/Drawings/WaspKing.jpg', title: 'The Wasp King', description: 'Pen and ink on paper', },
    { url: '/Drawings/Icarus.jpg', title: 'Icarus', description: 'Pen and ink on paper', },
    // { url: '/Drawings/MingeMen.jpg', title: 'Innapropriate title #1', description: 'Pen and ink on paper', }
  ]

  const printsData = [
    { url: '/Prints/XX.jpg', title: 'XX', description: 'Relief ink and indian ink on card', },
    { url: '/Prints/Trans.jpg', title: 'Trans', description: 'Gouache and relief ink on card', },
    { url: '/Prints/XY.jpg', title: 'XY', description: 'Relief ink and indian ink on card', },
    { url: '/Prints/Lukewarm.jpg', title: 'Lukewarm', description: 'Relief ink on newsprint', },
    { url: '/Prints/ExitWounds.jpg', title: 'Exit Wounds', description: 'Relief ink on acetate', },
    { url: '/Prints/BongWater.jpg', title: 'Bong Water', description: 'Relief ink on newsprint', },
    { url: '/Prints/LoveBites.jpg', title: 'Love Bites', description: 'Gouache, relief ink and indian ink on paper', },
    { url: '/Prints/SplitScreen.jpg', title: 'Split Screen', description: 'Gouache, relief ink and indian ink on paper', },
    { url: '/Prints/BioMass.jpg', title: 'Fragile', description: 'Gouache and indian ink on paper', },
    { url: '/Prints/FourStrikes.png', title: "Four Strikes and You're Out", description: 'Relief ink on card', }
  ]

  const otherProjectsData = [
    { url: '/OtherProjects/TheYearOfThePig.png', title: 'The Year of the Pig', description: 'A short novel about a group of nocturnal young adults who struggle navigating their coming of age.', },
    { url: '/OtherProjects/Rare1.png', title: 'Rarefied', description: 'Two completed vinyl works (RARE1 and RARE2) for the record label Rarefied.', },
    { url: '/OtherProjects/Stapled.jpg', title: 'Stapled to a Nihilist', description: 'A short film script about a young mans struggle coming to terms with reality in an increasingly toxic environment.', },
    { url: '/OtherProjects/Cookbook.jpg', title: 'The Nihilists Cookbook', description: 'A collection of recipes for the misunderstood, migsuided and misrepresented.', },
  ]

  let data;

  if (variant === "drawings") {
    data = drawingsData;
  }

  if (variant === "prints" ) {
    data = printsData;
  }

  if (variant === "other") {
    data = otherProjectsData;
  }

  return (
    <>
      { data.map((image, index) => (
        <div key={index} className="template-container" >
          <div 
            className="item-img-div" 
            style={{ backgroundImage: `url(${image.url})` }} 
            onClick={ () => {
              setSelectedItem(image)
              setModalOpenStatus(true)
            }}>
          </div>
          <h1>{ image.title }</h1>
          <p>{ image.description }</p>
        </div>
      ))}
      <Modal status={modalOpenStatus} setStatus={setModalOpenStatus} >
        {selectedItem &&
        <div className='selected-item-wrapper'>
          <div className='selected-item-img' style={{ backgroundImage: `url(${selectedItem.url})` }}></div>
        </div>}
      </Modal>
    </>
  )
}

export default ItemTemplate;