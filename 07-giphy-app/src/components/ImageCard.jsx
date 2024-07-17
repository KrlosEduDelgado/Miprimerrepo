

const ImageCard = ({tittle,url}) => {
  return (
    <div className='image-container'>
        <img className='image-view' src={url} alt={tittle} />
    </div>
  )
}

export default ImageCard