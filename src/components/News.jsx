import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { BarLoader } from 'react-spinners'
// import sample from './../sampleApi.json'
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 9,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            // article: sample.articles,
            page: 1,
            articles: [],
            loading: false
        }
    }

    async update(page) {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d150430bb4bf40c396ca36687f2676e2&page=${page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false, page: page });
    }

    async componentDidMount() {
        await this.update(1)
    }


    handleNextClick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d150430bb4bf40c396ca36687f2676e2&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({
        //     page: ++this.state.page,
        // })

        await this.update(this.state.page + 1)
        // console.log("next: " + this.state.page)
    }
    handlePrevClick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d150430bb4bf40c396ca36687f2676e2&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({
        //     page: --this.state.page,
        // })

        await this.update(this.state.page - 1)
        // console.log("prev: " + this.state.page)
    }

    capitalizeFirstLetterOfCategory() {
        let stringCategory = this.props.category
        return stringCategory.charAt(0).toUpperCase() + stringCategory.slice(1);
    }

    render() {
        return (
            <>
                <div className="container my-3">

                    <div className="container d-flex justify-content-between">
                        <button type="button" disabled={this.state.page <= 1} className="btn btn-outline-info btn-sm" onClick={this.handlePrevClick}>&larr; Previous Page</button>
                        <button type="button" disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-outline-info btn-sm" onClick={this.handleNextClick}>&rarr; Next Page</button>
                    </div>

                    <h2 className='text-center my-3'>Top Headlines - {this.capitalizeFirstLetterOfCategory()}</h2>
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
}

export default News