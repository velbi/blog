
import React from 'react'
import ReactDOM from 'react-dom'

import './ComicPage.scss'


import Pagination from '../Pagination';



class ComicPage extends React.Component {
    
    constructor() {
        super();

        // an example array of items to be paged
        let exampleItems = [...Array(50).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }))
        console.log(exampleItems)

        this.state = {
            exampleItems: exampleItems,
            pageOfItems: []
        };

        this.onChangePage = this.onChangePage.bind(this);


    }

    onChangePage(pageOfItems) {
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="text-center">
                        {this.state.pageOfItems.map(item =>
                            <div key={item.id}>{item.name}</div>
                        )}
                        <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ComicPage