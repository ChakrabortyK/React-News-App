import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { BarLoader } from 'react-spinners'
// import sample from './../sampleApi.json'


export class News extends Component {
    constructor() {
        super();
        this.state = {
            // article: sample.articles,
            page: 1,
            articles: [],
            loading: false
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=d150430bb4bf40c396ca36687f2676e2&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    }


    handleNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=d150430bb4bf40c396ca36687f2676e2&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        })
        // console.log(this.state)
    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=d150430bb4bf40c396ca36687f2676e2&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false

        })
        // console.log(this.state)
        // console.log("prev")

    }
    render() {
        return (
            <>
                <div className="container my-3">

                    <div className="container d-flex justify-content-between">
                        <button type="button" disabled={this.state.page <= 1} className="btn btn-outline-info btn-sm" onClick={this.handlePrevClick}>&larr; Previous Page</button>
                        <button type="button" disabled={this.state.page > Math.ceil(this.state.totalResults / 9)} className="btn btn-outline-info btn-sm" onClick={this.handleNextClick}>&rarr; Next Page</button>
                    </div>

                    <h2 className='text-center'>Top Headlines</h2>
                    {this.state.loading && <BarLoader
                        color="#36d7b7"
                        cssOverride={{
                            display: "block",
                            margin: "0 auto",
                            borderColor: "red",
                        }}
                    />}

                    <div className="row my-3">
                        {!this.state.loading && this.state.articles.map(element => {
                            // console.log(element)
                            return <div className="col-lg-4" key={element.url}>
                                <NewsItem
                                    title={element.title ? element.title.slice(0, 45) : ""}
                                    description={element.description ? element.description.slice(0, 88) : ""}
                                    imageUrl={element.urlToImage}
                                    url={element.url} />
                            </div>
                        })}
                    </div>



                </div>
            </>
        )
    }
}

export default News