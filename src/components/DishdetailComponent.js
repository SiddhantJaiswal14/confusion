import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(dishdetail) {

        const comments = dishdetail.comments.map((commentlist) => {
            return (
                <ul key={commentlist.id} class="list-unstyled">
                    <li>{commentlist.comment}</li>
                    <li>{commentlist.author} , {commentlist.date}</li>
                </ul>
            );
        })

        return (
            <div>
                <h4>Comments</h4>
                {comments}
            </div>
        );
    }

    render() {

        if (this.props.dish != null)
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            );
    }
}

export default DishDetail