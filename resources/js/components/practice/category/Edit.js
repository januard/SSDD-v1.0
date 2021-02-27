import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {

    constructor() {
        super();
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            category: ''
        }
    }

    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        });
    }

    onSubmit(e) {

        e.preventDefault();

        const category = {
            category: this.state.category
        }

        axios.post('/category/update', category)
        .then(res => {
            console.log(res.data);
        }).catch(error => {
            console.log(res.data);
        });

    }

    render() {
        return (
            <div>
                <hr />
                <form>
                    <div className="form-group">
                        <label htmlFor="category">Category Name</label>
                        <input type="text"
                            className="form-control"
                            id="category"
                            value={this.state.category}
                            onChange={this.onChangeCategory}
                            placeholder="Enter category" />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}
