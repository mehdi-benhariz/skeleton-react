import React,{useEffect,useState} from "react";
import SkeletonArticle from "../skeletons/SkeletonArticle";


const Articles = () => {
    const [articles, setarticles] = useState(null);
    useEffect(() => {
        setTimeout( async()=>{
            const result = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await result.json();
            setarticles(data);
         },5000  );   
    }, [])

    return (
        <div className="articles">
           <h2>Articles</h2>
           {articles && articles.map(article => (
        <div className="article" key={ article.id }>
          <h3>{ article.title }</h3>
          <p>{ article.body }</p>
        </div>
      ))}
           {
               !articles && [...Array(4).keys()].map(n=> <SkeletonArticle   key={n}  theme='dark' />)
           }
        </div>
      );
}
 
export default Articles;