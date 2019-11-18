import React, {useState, useEffect} from 'react';
import Gift from '../assets/gift.svg';
import IOU from '../assets/promise.svg';
import Message from '../assets/envelope.svg';

function Picture(props) {

    const [category, setCategory] = useState(props.data);
    const [img, setImage] = useState(Gift);

    useEffect(() => {
        setCategory(props.data);

        if (category === "IOU"){
            setImage(IOU);
        }else if (category === "Message"){
            setImage(Message);
        }else{
            setImage(Gift);
        }
    })

    return(
        <img src={img} />
    )
}

export default Picture;
