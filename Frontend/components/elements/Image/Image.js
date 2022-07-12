import styles from './Image.module.scss'
import RemoveIcons from './../../svg/RemoveIcons';

/**
 * @param fileImage - принимает объект файла
 * @variables objectUrl : String - создает ссылку на изображение с <input type='file'/>
 * @returns {JSX.Element} - вовзращает <img/> на основе созданной ссылки
 * @constructor
 */

const Image = ({fileImage,url,removeClick,onClick,...props}) => {
    let objectUrl

    fileImage ? objectUrl = URL.createObjectURL(fileImage)
                : objectUrl = url

    return (
        <>
            {
                props.remove
                    ? <div className={styles.upload__image + ' ' + styles.remove__image}>
                        <img src={objectUrl} alt='lot-photo'/>
                        <span>
                            <RemoveIcons fill={"#FFFFFF"} onClick={removeClick}/>
                        </span>
                    </div>
                    : <div className={styles.upload__image + ' ' + styles.remove__image}>
                        <img src={objectUrl} alt='lot-photo' />
                            <span>
                            <RemoveIcons fill={"#FFFFFF"} onClick={onClick}/>
                            </span>
                    </div>
            }
        </>
    )
}

export default Image