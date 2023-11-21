
const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-img-container">
        <img className="four-logo" src="/title-icon.png" alt="The artists logo" loading="lazy"/>
      </div>
      <div className="not-found-content-container">
        <h1>404</h1>
        <p>Nothing exists here. This is likely because the mighty and powerful Four has not designed this yet. To return to the homepage press <a href="/">here.</a> <br />Yours truly, <br />Four Kid</p>
        <img className="four-signature" src="/four-signature.png" alt="The artists signature" loading="lazy"/>
      </div>
    </div>
  )
}

export default NotFound