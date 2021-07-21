import Article from "./Article"

function ArticleList(props) {
    console.log(props)
    return (
        <main>
            {props.posts.map((post) => <Article key={post.id} postsObj={post}/>)}
        </main>
    )
}    


export default ArticleList;
