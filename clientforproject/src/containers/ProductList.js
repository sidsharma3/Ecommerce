import React from 'react';
import axios from 'axios';
import { Button, Icon, Dimmer, Message, Loader, Segment, Container, Image, Item, Label } from 'semantic-ui-react'
import { productListURL } from '../constants'

require('bootstrap')

const paragraph = <Image src='/images/wireframe/short-paragraph.png' />

class ProductList extends React.Component {

    state = {
        loading: false,
        error: null,
        data: null
    }

    componentDidMount() {
        this.setState({ loading: true });
        axios
            .get(productListURL)
            .then(res => {
                this.setState({ data: res.data, loading: false });
            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });
    }


    render() {
        const { data, error, loading } = this.state;
        return (
            <Container>
                {loading && (
                    <Segment>
                        <Dimmer active inverted>
                            <Loader inverted>Loading</Loader>
                        </Dimmer>

                        <Image src='/images/wireframe/short-paragraph.png' />
                    </Segment>
                )}
                <div class="jumbotron" style={{backgroundColor: "lightBlue"}}>
                    <h1 class="display-4">Hello, everyone!</h1>
                    <p class="lead">This is a simple web ecommerce website select a project and try it out!.</p>
                    <hr class="my-4"></hr>
                    </div>
                <Item.Group divided>
                    <Item>
                        <Item.Image src='/images/wireframe/image.png' />

                        <Item.Content>
                            <Item.Header as='a'>My Neighbor Totoro</Item.Header>
                            <Item.Meta>
                                <span className='cinema'>IFC Cinema</span>
                            </Item.Meta>
                            <Item.Description>{paragraph}</Item.Description>
                            <Item.Extra>
                                <Button primary floated='right' icon labelPosition="right">
                                    Add to Cart
                            <Icon name="cart plus" />
                                </Button>
                                <Label>Limited</Label>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Container>
        );
    }
}

export default ProductList