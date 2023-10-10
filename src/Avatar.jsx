function Avatar({ images, firstName, lastName }){
    return(
        <div>
            <img src={images} alt="avatar image" />
            <p>{firstName}</p>
            <p>{lastName}</p>
        </div>
    )
}

export default Avatar;


