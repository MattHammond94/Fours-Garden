import ArtworkNavBar from '../components/ArtworkNavBar';
import ItemTemplate from '../components/ItemTemplate';

const Projects = () => {
  const otherProjectsData = [
    { 
      url: '/OtherProjects/TheYearOfThePig.png', 
      title: 'The Year of the Pig', 
      description: 'A short novel about a group of nocturnal young adults who struggle navigating their coming of age.', 
      lowResUrl: '/OtherProjects/TheYearOfThePig-blur.png',
      slides: [{ url: '/OtherProjects/TheYearOfThePig.png', lowResUrl: '/OtherProjects/TheYearOfThePig-blur.png' }],
      styles: { width: '520px', height: '600px' } 
    },
    { 
      url: '/OtherProjects/Rare1.png', 
      title: 'Rarefied', 
      description: 'Two completed vinyl works (RARE1 and RARE2) for the record label Rarefied.', 
      lowResUrl: '/OtherProjects/Rare1-blur.png',
      slides: [ 
        { url: '/OtherProjects/Rare1.png', lowResUrl: '/OtherProjects/Rare1-blur.png' }, 
        { url: '/OtherProjects/RarefiedFinalOne.jpg', lowResUrl: '/OtherProjects/RarefiedFinalOne-blur.jpg' },
        // { url: '/OtherProjects/RarefiedFinalTwo.jpg', lowResUrl: '/OtherProjects/RarefiedFinalTwo-blur.jpg' }
      ],
      styles: { width: '630px', height: '560px' } 
    },
    { 
      url: '/OtherProjects/Stapled.jpg', 
      title: 'Stapled to a Nihilist', 
      description: 'A short film script about a young mans struggle coming to terms with reality in an increasingly toxic environment.', 
      lowResUrl: '/OtherProjects/Stapled-blur.jpg',
      slides: [ 
        { url: '/OtherProjects/StapledAlt.jpg', lowResUrl: '/OtherProjects/StapledAlt-blur.jpg' }, 
        { url: '/OtherProjects/StapledTitle.jpg', lowResUrl: '/OtherProjects/StapledTitle-blur.jpg' }, 
        { url: '/OtherProjects/StapledWritten.jpg', lowResUrl: '/OtherProjects/StapledWritten-blur.jpg' }
      ],
      styles: { width: '470px', height: '630px' } 
    },
    { 
      url: '/OtherProjects/Cookbook.jpg', 
      title: 'The Nihilists Cookbook', 
      description: 'A collection of recipes for the misunderstood, migsuided and misrepresented.', 
      lowResUrl: '/OtherProjects/Cookbook-blur.jpg',
      slides: [ 
        { url: '/OtherProjects/RecipesForThe.jpg', lowResUrl: '/OtherProjects/RecipesForThe-blur.jpg' },
        { url: '/OtherProjects/Cookbook.jpg', lowResUrl: '/OtherProjects/Cookbook-blur.jpg' },
        { url: '/OtherProjects/CookbookTexture.jpg', lowResUrl: '/OtherProjects/CookbookTexture-blur.jpg' },
      ],
      styles: { width: '640px', height: '500px' }
    },
  ]

  return (
    <div>
      <ArtworkNavBar variant="other" />
      <div className="items-container">
        <ItemTemplate variant="other" itemData={ otherProjectsData }/>
      </div>
    </div>
  )
}

export default Projects