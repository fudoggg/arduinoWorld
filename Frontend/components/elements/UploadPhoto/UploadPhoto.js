import React from 'react'
import styles from './UploadPhoto.module.scss'
import Image from './../Image/Image';

/**
 * @param changeQuery - измененят объект состояний , записывает айди загруженных изображений на сервер в массив arrImg
 * @variables images : Array - Массив изображений
 * @variables url : String - ссылка для запроса
 * @function onImageChange - помещает в images файлы
 * @function onSumbit - отпраляет файлы на сервер и также при успшеном запросе помещает в состояния массив id фото загруженных на сервер
 * @component Image - принимает элемент images и формирует его blob и возвращает <img/>
 * @returns {UploadPhoto}
 */

const UploadPhoto = (
    {
        setFormData,
        children,
        newValue,plentyFormData,setPlentyFormData,
    }
    ) => {
    const [images,setImage] = React.useState([])
    const [upProgress, setUpProgress] = React.useState(0)


    const onImageChange = async (event) => {
        setImage(prev => [...prev,...event.target.files])
        const newFileList = Array.from(images.concat([...event.target.files]))
        getPhoto(newFileList)
    }

    const getPhoto = async (files) => {
        try {
            const resFile = await uploadPhoto(files)
            setFormData?.(resFile)
            setPlentyFormData?.({...plentyFormData,[newValue]: resFile})
        }catch (error) {
            alert(error.message)
        }
    }

    const uploadPhoto = files => {
        const formData = new FormData()
        return new Promise(((resolve,reject) => {
            Array.from(files).forEach((file) => {
                formData.append('img', file)
            })
            resolve(formData)
            reject('Не удалось отправить файлы.')
        }))
    }


    const removeFile = (ind) => {
        const newFileList = Array.from(images)
        newFileList.splice(ind,1)
        setImage(newFileList)
        getPhoto(newFileList)
    }


    return(
        <div className={styles.upload__wrapper}>
            <form>
                <div className={styles.header__upload}>
                    <p>Фотографии</p>
                    <div>
                        {
                            // upProgress !== 0
                                // ? <progress max='100' value={upProgress}>1</progress>
                                // <label htmlFor="file-upload" className={styles.custom__button__upload}>
                                    // {/* Добавить */}
                                // {/* </label> */}
                        }
                    </div>
                </div>
                <div className={styles.images}>
                    <label htmlFor="file-upload" className={styles.custom__file__upload}>
                        <input
                            id="file-upload"
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={onImageChange}
                            // onChange={}
                        />
                        <i>Загрузить фото</i>
                    </label>
                    {
                        Object.values(images).map((image,ind) =>
                            <Image
                                alt='image'
                                onClick={() => removeFile(ind)}
                                key={ind} fileImage={image}
                            />
                        )
                    }
                    {children}
                </div>
            </form>
        </div>

    )
}

export default UploadPhoto