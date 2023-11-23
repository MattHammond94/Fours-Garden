import ArtworkNavBar from '../components/ArtworkNavBar';
import ItemTemplate from '../components/ItemTemplate';

const Drawings = () => {
  const drawingsData = [
    { url: '/Drawings/Venus.jpg', title: 'Venus Fly Trap', description: 'Pencil, relief ink and photoshop', lowResUrl: '/Drawings/Venus-blur.jpg' },
    { url: '/Drawings/Vice.jpg', title: 'Vice', description: 'Pencil, relief ink and photoshop', lowResUrl: '/Drawings/Vice-blur.jpg' },
    { url: '/Drawings/BoysDoNotCry.jpg', title: 'Boys Do Not Cry', description: 'Pencil, relief ink and photoshop', lowResUrl: '/Drawings/BoysDoNotCry-blur.jpg' },
    { url: '/Drawings/Woeful.jpg', title: 'Sorrow', description: 'Pencil, relief ink and photoshop', lowResUrl: '/Drawings/Woeful-blur.jpg' },
    { url: '/Drawings/Desecration.jpg', title: 'Desecrate The Corpse', description: 'Pencil, relief ink and photoshop', lowResUrl: '/Drawings/Desecration-blur.jpg' },
    { url: '/Drawings/Detachment.jpg', title: 'Detachment', description: 'Pencil, relief ink and photoshop', lowResUrl: '/Drawings/Detachment-blur.jpg' },
    { url: '/Drawings/EphergyToAKing.jpg', title: 'Ephergy To A King', description: 'Pencil, relief ink and photoshop', lowResUrl: '/Drawings/EphergyToAKing-blur.jpg' },
    { url: '/Drawings/Pillar.jpg', title: 'The Pillar of Creation', description: 'Pencil, relief ink and photoshop', lowResUrl: '/Drawings/Pillar-blur.jpg' },
    { url: '/Drawings/Happiness.jpg', title: 'Happiness Interrupted', description: 'Pencil, relief ink and photoshop', lowResUrl: '/Drawings/Happiness-blur.jpg' },
    { url: '/Drawings/Boudica.jpg', title: 'Boudica', description: 'Pencil, relief ink and photoshop', lowResUrl: '/Drawings/Boudica-blur.jpg' },
    { url: '/Drawings/Slipstream.jpg', title: 'Slipstream', description: 'Pencil, relief ink and photoshop', lowResUrl: '/Drawings/Slipstream-blur.jpg' },
    { url: '/Drawings/Playing.jpg', title: 'Playing With Fire', description: 'Pen and ink on paper', lowResUrl: '/Drawings/Playing-blur.jpg' },
    { url: '/Drawings/Deception.jpg', title: 'Deception', description: 'Pen and ink on paper', lowResUrl: '/Drawings/Deception-blur.jpg' },
    { url: '/Drawings/QueenBee.jpg', title: 'Queen Bee', description: 'Pen and ink on paper', lowResUrl: '/Drawings/QueenBee-blur.jpg' },
    { url: '/Drawings/JellyFishKiss.jpg', title: 'Jellyfish Kiss', description: 'Pen and ink on paper', lowResUrl: '/Drawings/JellyFishKiss-blur.jpg' },
    { url: '/Drawings/Magic.jpg', title: 'Cloak and Dagger', description: 'Pen and ink on paper', lowResUrl: '/Drawings/Magic-blur.jpg' },
    { url: '/Drawings/Autumn.jpg', title: 'Autumn', description: 'Pen and ink on paper', lowResUrl: '/Drawings/Autumn-blur.jpg' },
    { url: '/Drawings/Fisherman.jpg', title: 'Gone Fishing', description: 'Pen and ink on paper', lowResUrl: '/Drawings/Fisherman-blur.jpg' },
    { url: '/Drawings/Amadeus.jpg', title: 'Amadeus', description: 'Pen and ink on paper', lowResUrl: '/Drawings/Amadeus-blur.jpg' },
    { url: '/Drawings/BigBrother.jpg', title: 'No Matter What', description: 'Pen and ink on paper', lowResUrl: '/Drawings/BigBrother-blur.jpg' },
    { url: '/Drawings/LeadHeart.jpg', title: 'Lead Heart', description: 'Pen and ink on paper', lowResUrl: '/Drawings/LeadHeart-blur.jpg' },
    { url: '/Drawings/LittleSister.jpg', title: 'Innocence', description: 'Pen and ink on paper', lowResUrl: '/Drawings/LittleSister-blur.jpg' },
    { url: '/Drawings/Migraines.jpg', title: 'Migraines', description: 'Pen and ink on paper', lowResUrl: '/Drawings/Migraines-blur.jpg' },
    { url: '/Drawings/WaspKing.jpg', title: 'The Wasp King', description: 'Pen and ink on paper', lowResUrl: '/Drawings/WaspKing-blur.jpg' },
    { url: '/Drawings/Icarus.jpg', title: 'Icarus', description: 'Pen and ink on paper', lowResUrl: '/Drawings/Icarus-blur.jpg' },
    // { url: '/Drawings/MingeMen.jpg', title: 'Innapropriate title #1', description: 'Pen and ink on paper', lowResUrl: '/Drawings/' }
  ]

  return (
    <div>
      <ArtworkNavBar variant='drawings'/>
      <div className="items-container">
        <ItemTemplate variant="drawings" itemData={drawingsData} />
      </div>
    </div>
  )
}

export default Drawings