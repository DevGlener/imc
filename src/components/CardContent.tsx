type Props = {
    text : string ;
    avatar : string;
}



export default function CardContent({ text, avatar }: Props){



return(

    <>
        <p>{text}</p>
        <img src={avatar} alt="" />

    </>

)

}

