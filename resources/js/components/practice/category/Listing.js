import Axios from 'axios';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Pagination from 'react-js-pagination';

export default class Listing extends Component {

    constructor() {

        super();

        this.state = {
            categories: [],
            active_page: 1,
            items_count_per_page: 1,
            total_items_count: 1, 
            page_range_displayed: 3
        };

        this.handlePageChange=this.handlePageChange.bind(this);

    }

    componentDidMount() {

        axios.get("/api/practice/category/show_categories")
        .then(response => {
            this.setState({
                categories: response.data.data, 
                active_page: response.data.current_page,
                items_count_per_page: response.data.per_page,
                total_items_count: response.data.total
            });
        });

    }

    handlePageChange(page_number) {

        console.log(`active page is ${page_number}`);

        // this.setState({active_page: page_number});

        axios.get("/api/practice/category/show_categories?page="+ page_number)
        .then(response => {
            this.setState({
                categories: response.data.data, 
                active_page: response.data.current_page,
                items_count_per_page: response.data.per_page,
                total_items_count: response.data.total
            });
        });

    }

    onDelete(category_id) {

        axios.delete('/api/practice/category/delete/'+ category_id)
        .then(response => {

            // var categories = this.state.categories;

            // for(var i = 0; i < categories.length; i++) {

            //     if(categories[i].id = category_id) {

            //         categories.splice(i, 1);

            //         this.setState({categories: categories});

            //     }

            // }

            this.componentDidMount();
        
        });

    }

    render() {
        return(
            <div>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Created At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.categories.map(
                                    category => {
                                        return (
                                            <tr key={category.category_id}>
                                                <td scope="row">1</td>
                                                <td>{category.category}</td>
                                                <td>{category.status}</td>
                                                <td>{category.created_at}</td>
                                                <td>
                                                    <Link to={`/practice/api/category/edit/${category.category_id}`} className="btn btn-info">Edit</Link> 
                                                    <button className="btn btn-danger" onClick={this.onDelete.bind(this, category.category_id)}>Delete</button> 
                                                    
                                                </td>
                                            </tr>
                                        );
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <Pagination
                        activePage={this.state.active_page}
                        itemsCountPerPage={this.state.items_count_per_page}
                        totalItemsCount={this.state.total_items_count}
                        pageRangeDisplayed={this.state.page_range_displayed}
                        onChange={this.handlePageChange}
                        itemClass='page-item'
                        linkClass='page-link'
                    />
                </div>
            </div>
        );
    }
}