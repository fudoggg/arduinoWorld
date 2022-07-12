import React, {useEffect, useState} from 'react';
import MainContainer from '../../components/constructor/MainContainer/MainContainer';
import UserFeedback from '../../components/constructor/UserFeedback/UserFeedback';
import UserOrder from '../../components/constructor/UserOrder/UserOrder';
import ShortCard from '../../components/elements/ShortCard/ShortCard';
import UploadPhoto from "../../components/elements/UploadPhoto/UploadPhoto";
import {sendFilesToServer} from "../../query/_global/sendFilesToServer";

export default function Home() {
    const [state,setState] = useState(null)

    useEffect(() => {
        console.log(state)
    },[state])

    return (
        <MainContainer>
              <UploadPhoto
                setFormData={setState}
              />
                <button
                    onClick={() => sendFilesToServer(state)}
                >
                    Отправить
                </button>
        </MainContainer>
    )
}
