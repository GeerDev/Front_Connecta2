import '../../styles/main.scss';
import image404 from '../../assets/NotFound.png'

const NotFound = () => {
    return (
      <div className='contenedor404'>
        <img src={image404} alt="Imagen Not Found 404" />
      </div>
    )
  }
  
  export default NotFound