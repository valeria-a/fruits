import { useState } from "react"

const Love = () => {

    const [selected, setSelected] = useState('black')

    const emojiWhite = '&#x1F90D;'
    const emojiRed = '&#10084;'

    return(
        //&#9733;
        //&#x1F90D;
        <button style={{
            cursor: 'default',
            background: 'transparent',
            border: 'none',
            fontSize: '2em'
        }} >&#9733;</button>
    )
}

export default Love