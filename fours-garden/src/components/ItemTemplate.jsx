
const ItemTemplate = ({ variant }) => {

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
    { url: '/Prints/.jpg', title: '', description: '', },
    { url: '/Prints/.jpg', title: '', description: '', },
    { url: '/Prints/.jpg', title: '', description: '', },
    { url: '/Prints/.jpg', title: '', description: '', }
  ]

  const otherProjectsData = [
    { url: '/OtherProjects/.jpg', title: '', description: '', },
  ]

  let data;

  if (variant === "drawings") {
    data = drawingsData;
  }

  if (variant === "prints" ) {
    data = printsData;
  }

  if (variant === "otherProjects") {
    data = otherProjectsData;
  } 
  
  // const openModal = () => {
  //   console.log('Modal open')
  // }

  return (
    <>
      { data.map((image, index) => (
        <div key={index} className="template-container">
          <div className="item-img-div" style={{ backgroundImage: `url(${image.url})` }}></div>
          <h1>{ image.title }</h1>
          <p>{ image.description }</p>
        </div>
      ))}
    </>
  )
}

export default ItemTemplate;