function Article({postsObj: {title, date="January 1, 1970", preview, id, minutes}}){
    let timeToRead = minutes < 30 ? 5 : 10;
    let emoji = minutes < 30 ? "☕️" : "🍱";
    let emojis = ""
    for (let i=0; minutes>i; i+= timeToRead) {
        emojis += emoji 
    }   
    
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small> · <small>{emojis}{minutes} min read</small>
            <p>{preview}</p>
        </article>
    ) 
}
// do not need key={id} here - that is in ArticleList

export default Article

