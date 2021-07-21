function Article({postsObj: {title, date="January 1, 1970", preview, id, minutes}}){
    let timeToRead = minutes < 30 ? 5 : 10;
    let emoji = minutes < 30 ? "☕️" : "🍱";
    let emojis = ""
    for (let i=0; minutes>i; i+= timeToRead) {
        emojis += emoji 
    }   
    
    return(
        <article key ={id}>
            <h3>{title}</h3>
            <small>{date}</small> · <small>{emojis}{minutes} min read</small>
            <p>{preview}</p>
        </article>
    ) 
}


export default Article

