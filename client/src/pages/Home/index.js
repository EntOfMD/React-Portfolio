import React, { Component } from 'react';

//components
import Hero from '../../components/Hero';
import Card from '../../components/Card';

export default class Home extends Component {
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
        <Card heading="Project 1">meee</Card>
      </>
    );
  }
}
