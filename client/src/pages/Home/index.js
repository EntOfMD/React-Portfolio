import React, { Component } from 'react';

//components
import Hero from '../../components/Hero';
import Card from '../../components/Card';
import { Container, Row, Col } from '../../components/Grid';
import LinkedInCard from '../../components/LinkedInCard';

export default class Home extends Component {
  state = {
    Projects: [
      {
        heading: 'Project 1',
        image:
          'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        children: `Put here what needs to be inside a card, like project summary.`
      },
      {
        heading: 'Project 2',
        image:
          'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        children: `Put here what needs to be inside a card, like project summary.`
      },
      {
        heading: 'Project 3',
        image:
          'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        children: `Put here what needs to be inside a card, like project summary.`
      }
    ]
  };

  render() {
    return (
      // this is the big background in Homepage, it's the Hero component
      <>
        <Hero
          backgroundImage={
            'https://images.pexels.com/photos/34580/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
          }
        >
          <h1>React Resume Template!</h1>
          <h2>Make sure to edit the CONFIG.json</h2>
        </Hero>

        {/* Projects Section */}
        <h1 className="mt-5 ml-3">Projects</h1>

        <Container fluid={true}>
          <Row fluid={false} justifyContent={'center'}>
            {this.state.Projects.map(i => {
              return (
                <Col size={'md-4'} key={i.heading}>
                  <Card heading={i.heading} image={i.image} key={i.heading}>
                    {i.children}
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>

        <h1 className="mt-5 ml-3">Professional Recommendations</h1>
        <Container fluid={false}>
          <Row justifyContent={'center'} fluid={false}>
            <Col size={'md-6'}>
              <LinkedInCard
                recommenderImg={
                  'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcourse_report_production.s3.amazonaws.com%2Frich%2Frich_files%2Frich_files%2F2631%2Fs300%2Fgw-codingbootcamp.jpg&f=1'
                }
              />
            </Col>
            <Col size={'md-6'}>
              <LinkedInCard />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
