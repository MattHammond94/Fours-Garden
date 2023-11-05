import ReactDOM from "react-dom";

const Modal = ({status, children, setStatus}) => {

  if (!status) return null

  return ReactDOM.createPortal(
    <>
      <div className="modal-container" onClick={() => { setStatus(false) }}>
        <p className="modal-close-button" onClick={ () => setStatus(false) }>&#215;</p>
        <div className="modal-content-container">
          { children }
        </div>
      </div>
    </>, document.getElementById('modal')
  )
}

export default Modal