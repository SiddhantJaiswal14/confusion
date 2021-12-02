import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';




    function RenderDish({dish}) {
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

    function RenderComments({dishdetail}) {

        const comments = dishdetail.comments.map((commentlist) => {
            return (
                <ul key={commentlist.id} class="list-unstyled">
                    <li>{commentlist.comment}</li>
                    <li>{commentlist.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(commentlist.date)))}</li>
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

    const DishDetail = (props) => {

        if (props.dish != null)
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish}/>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments dishdetail={props.dish}/>
                        </div>
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

export default DishDetail