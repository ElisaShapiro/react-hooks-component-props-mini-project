import Article from "./Article"

function ArticleList(props) {
    console.log(props)
    return (
        <main>
            {props.posts.map((post) => <Article postsObj={post}/>)}
        </main>
    )
}    
// key={props.posts.id}

export default ArticleList;
