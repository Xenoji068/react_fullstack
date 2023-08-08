import NewsListItem from "./NewsListItem";


const NewsList = (props) => {

    const news = props.news.map((item)=>(
        <NewsListItem key={item.id} item={item}/>
    ))   


    return (
        <>
           { news } 
        </>
    )
}

export default NewsList;