import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import youtube from '../assets/images/youtube.jpg';
import soundkit from '../assets/images/soundkit.jpg';
import beatstars from '../assets/images/beatstars.jpg';

import Card from '../components/Card';


class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Youtube Channel',
                    subTitle: 'Sounds and tutorials by AK',
                    imgSrc: youtube,
                    link: 'https://www.youtube.com/channel/UCvmtu6W6lMoGXUWbRQK5QLQ/featured?view_as=subscriber',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Latest Sample Library',
                    subTitle: '23 Original Compositions by AK',
                    imgSrc: soundkit,
                    link: 'https://www.dropbox.com/home/Goin%20Crazy%20Vol%201.%20Sample%20Library',
                    selected: false

                },
                {
                    id: 2,
                    title: 'Beatstore',
                    subTitle: 'Lease/Purchase Exclusive beats!',
                    imgSrc: beatstars,
                    link: 'https://www.beatstars.com/akyougoincrazy',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
     }

    makeItems = (items) => {
         return items.map(item => {
             return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
         });
     }

    render() {
        return (
            <Container fluid={true} >
                <Row className='justify-content-center'>
                        {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;