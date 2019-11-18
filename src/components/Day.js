import React, {useState, useEffect} from 'react';
import Gift from '../assets/gift.svg';
import IOU from '../assets/promise.svg';
import Message from '../assets/envelope.svg';

function Day (props) {

    const [category, setCategory] = useState(props.data.category);
    const [img, setImage] = useState(Gift);

    useEffect(() => {
        if (category === "IOU"){
            setImage(IOU);
        }else if (category === "Message"){
            setImage(Message);
        }else{
            setImage(Gift);
        }
    })


    return(
        <article>
            <figure>
                <img src={img} />
            </figure>
            <h4>{props.data.day} day of Christmas</h4>
        </article>
    )
}

export default Day;