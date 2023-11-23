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

    constructor(props) {
        super(props);
        this.state = {
            // article: sample.articles,
            page: 1,
            articles: [],
            loading: false
        }
        document.title = `${this.capitalizeFirstLetterOfCategory()} - NewsApp`
    }

    async update(page) {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false, page: page });
    }

    async componentDidMount() {
        await this.update(1)
    }

    handleNextClick = async () => {
        await this.update(this.state.page + 1)
    }
    handlePrevClick = async () => {
        await this.update(this.state.page - 1)
    }

    capitalizeFirstLetterOfCategory() {
        let stringCategory = this.props.category
        return stringCategory.charAt(0).toUpperCase() + stringCategory.slice(1);
    }

    render() {
        return (
            <>
                <div className="container my-3">



                    <h2 className='text-center my-3'>Top Headlines - {this.capitalizeFirstLetterOfCategory()}</h2>
                    <div className="container d-flex justify-content-between">
                        <button type="button" disabled={this.state.page <= 1} className="btn btn-outline-info btn-sm" onClick={this.handlePrevClick}>&larr; Previous Page</button>
                        <button type="button" disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-outline-info btn-sm" onClick={this.handleNextClick}>&rarr; Next Page</button>
                    </div>
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