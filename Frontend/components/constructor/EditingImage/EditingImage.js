import React from 'react'
import UploadPhoto from './../../elements/UploadPhoto/UploadPhoto';
import Image from './../../elements/Image/Image';

const EditingImage = ({value,changeValue,setFile,file}) => {

    const removeImage = (id) => {
        const result = confirm('Вы действительно хотите удалить?')
        result && changeValue({img: value?.img.filter((item) => item.id !== id)})
    }
    return(
        <div>
            <UploadPhoto setFormData={setFile}>
                {
                    value?.img?.map((img,ind) => (
                            <Image
                                key={ind}
                                alt='image'
                                url={process.env.NEXT_PUBLIC_API_URL + '/' + img}
                                remove
                                removeClick={() => removeImage(img.id)}
                            />
                    ))
                }
            </UploadPhoto>
        </div>
    )
}

export default EditingImage