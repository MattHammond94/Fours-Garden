
const ItemTemplate = () => {

  const drawingImages = [
    { url: '/Drawings/Amadeus.jpg', title: 'Amadeus', description: 'Pen and ink on paper', dimensions: 'A3' },
    { url: '/Drawings/Autumn.jpg', title: 'Autumn', description: 'Pen and ink on paper', dimensions: 'A4' },
    { url: '/Drawings/Fisherman.jpg', title: 'Gone Fishing', description: 'Pen and ink on paper', dimensions: 'Custom -  41cm x 70cm' }
  ]

  return (
    <>
    { drawingImages.map((image, index) => (
      <div key={index} className="template-container">
        <div className="item-img-div" style={{ backgroundImage: `url(${image.url})` }}></div>
        <h1>{ image.title }</h1>
        <p>{ image.description } - { image.dimensions }</p>
      </div>
    ))}
    </>
  )
}

export default ItemTemplate;