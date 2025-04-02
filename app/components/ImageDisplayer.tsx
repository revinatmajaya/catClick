"use client"
import { useState, useEffect} from 'react'

function randomInt(min:number, max:number){
    return Math.floor(Math.random()*(max-min+1)+min)
}

const ImageDisplayer = ({onClick}: any) => {
    const images = [
        "./1.gif", "./2.png", "./3.gif", "./4.gif", "./5.gif",
        "./6.gif", "./7.gif", "./8.gif", "./9.gif", "./10.gif",
        "./11.gif","./12.gif","./13.gif","./14.gif","./15.gif",
        "./16.gif","./17.gif","./18.gif","./19.gif","./20.gif",]

    const [randomPos, setRandomPos] = useState({
        bottom: "0",
        right: "0",
        transform: "none",
        maxWidth: "0"
    })

    const [image, setImage] = useState("")

    useEffect(() => {
        const x = randomInt(0, 100)
        const y = randomInt(0, 100)
        setRandomPos({
            bottom: y+"%",
            right: x+"%",
            transform: `translate(${x}%,${y}%)`,
            maxWidth: `calc(var(--spacing)*${randomInt(35,60)})`,
        })
        setImage(images[randomInt(0, images.length-1)])
    }, [])

    return (
        <div className="grow flex flex-wrap justify-end items-end">
            <div className={`grow h-fit relative`} style={randomPos} onClick={
                () => {
                    const x = randomInt(0, 100)
                    const y = randomInt(0, 100)
                    setRandomPos({
                        bottom: y+"%",
                        right: x+"%",
                        transform: `translate(${x}%,${y}%)`,
                        maxWidth: `calc(var(--spacing)*${randomInt(25,40)})`,
                    });
                    setImage(images[randomInt(0, images.length-1)])
                    onClick()
                }}
            >
                {image == "" ? "" : <img src={image} alt="cat" width={1000} height={1000} draggable={false}/>}
            </div>
        </div>
    )
}

export default ImageDisplayer