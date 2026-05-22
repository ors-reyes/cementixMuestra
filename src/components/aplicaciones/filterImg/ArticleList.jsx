export const ArticleList = ({ articles }) => {
	return (
        <div className="article-list">
            {articles.map(article => (
                <div className="article-container" key={article.id}>
                    <div className="img-container">
                        <img src={article.image}/>
                        {/* <h2>{article.title}</h2> */}
                    </div>
                </div>
            ))}
        </div>
    )
};
