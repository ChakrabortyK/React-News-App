import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import { BarLoader } from 'react-spinners'
// import sample from './../sampleApi.json'
import PropTypes from 'prop-types'

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [totalResults, setTotalResults] = useState([])


    const updateNews = async (pageNo) => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNo}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        // console.log("url: " + url)
    }

    useEffect(() => {
        updateNews(1)
        document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - NewsApp`

        // setLoading(false)
        // eslint-disable-next-line
    }, [])

    const handleNextClick = async () => {
        setPage(page + 1)

        await updateNews(page + 1)
    }
    const handlePrevClick = async () => {
        setPage(page - 1)
        await updateNews(page - 1)
    }


    return (
        <>
            <div className="container my-3">

                <h2 className='text-center my-3'>Top Headlines - {props.category.charAt(0).toUpperCase() + props.category.slice(1)}</h2>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={page <= 1} className="btn btn-outline-info btn-sm" onClick={handlePrevClick}>&larr; Previous Page</button>
                    <button type="button" disabled={page >= Math.ceil(totalResults / props.pageSize)} className="btn btn-outline-info btn-sm" onClick={handleNextClick}>&rarr; Next Page</button>
                </div>
                {loading && <BarLoader
                    color="#36d7b7"
                    cssOverride={{
                        display: "block",
                        margin: "0 auto",
                        borderColor: "red",
                    }}
                />}

                <div className="row my-3">
                    {!loading && articles.map(element => {
                        // console.log(element)
                        return <div className="col-lg-4" key={element.url}>
                            <NewsItem
                                title={element.title ? element.title : ""}
                                description={element.description ? element.description.slice(0, 88) : ""}
                                imageUrl={element.urlToImage}
                                url={element.url}
                                author={!element.author ? "unkown Author" : element.author}
                                date={element.publishedAt}
                                source={element.source.name} />
                        </div>
                    })}
                </div>



            </div>
        </>
    )

}


News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News