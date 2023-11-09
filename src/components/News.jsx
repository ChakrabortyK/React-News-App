import React, { Component } from 'react'
import NewsItem from './NewsItem'
import sample from './../sampleApi.json'


export class News extends Component {
    constructor() {
        super();
        this.state = {
            article: sample.articles,
            loading: false
        }
    }

    // return <NewsItem key={element.title} title={element.title} description={element.description} imageUrl={element.urlToImage} />

    render() {
        return (
            <>
                <div className="container my-3">

                    <h2>Top Headlines</h2>


                    <div className="row my-3">
                        {this.state.article.map(element => {
                            return <div className="col-lg-4" key={element.url}>
                                <NewsItem

                                    title={element.title.slice(0, 52)}
                                    description={element.description.slice(0, 100)}
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