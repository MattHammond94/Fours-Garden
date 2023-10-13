
const ItemTemplate = () => {

  const drawingImages = [
    { url: '/Drawings/Amadeus.jpg', title: 'Amadeus', description: 'Pen and ink on paper', },
    { url: '/Drawings/Autumn.jpg', title: 'Autumn', description: 'Pen and ink on paper', },
    { url: '/Drawings/Fisherman.jpg', title: 'Gone Fishing', description: 'Pen and ink on paper', },
    { url: '/Drawings/Fisherman.jpg', title: 'Gone Fishing', description: 'Pen and ink on paper', },
    { url: '/Drawings/Fisherman.jpg', title: 'Gone Fishing', description: 'Pen and ink on paper', },
    { url: '/Drawings/Fisherman.jpg', title: 'Gone Fishing', description: 'Pen and ink on paper', }
  ]
  
  // const openModal = () => {
  //   console.log('Modal open')
  // }

  return (
    <>
      { drawingImages.map((image, index) => (
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