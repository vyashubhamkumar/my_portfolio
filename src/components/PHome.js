import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import React, { Component } from 'react';
import Navbar from './Navbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const url = (name, wrap = false) => {
  if (wrap) {
    return `url('${require(`../images/${name}`)}`
  }
  return require(`../images/${name}`);
}
const Background = ({ children, style }) => <div style={{}}>{children}</div>

export default class PHome extends Component {

  goTo = (offset) => this.parallax.scrollTo(offset);

  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={4}>

        {/* Page 3 */}
        <ParallaxLayer
          offset={2}
          speed={0.3}
          style={{}}
        >
          <img className="parallax-image" src={url('tb-bg.jpg')}/>
        </ParallaxLayer>


        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{}}
        >
          <img className="parallax-image"  src={url('tb-fg.png')}/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1.5}
          className="margin-for-effect"
        >
          <h1 style={{color:'#fff'}} className="designation margin-effect">
            I am from Hyderabad.<br />
            The City of Nizams <br />
            and Biryani.
          </h1>
        </ParallaxLayer>


        {/* Page 3 */}
        <ParallaxLayer
          offset={1}
          style={{}}
        >
          
        </ParallaxLayer>


        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{ position: 'absolute', left: 0, right: 0, top: 200, bottom: 0, zindex: 1 }}>
          <img src={url('shapes.png')} className="shapes" />
        </ParallaxLayer>

        {/* Page 1 */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          className="page-1"
        >

          <ParallaxLayer
            offset={0}
            speed={0.4}
          >
            <img src={url('IdCard.png')} className="idCard" />
          </ParallaxLayer>


        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.3}
        >
          <div className="home-content-wrap">
            <img className="dp" src={url('dp.jpg')} />
            <h1 className="name-heading">Shubham vyas</h1>
            <h1 className="designation">Front-end Developer</h1>
            <Typography variant="h5" classes="lead" paragraph={true} gutterBottom>Hi. I produce elegant, performant, and accessible digital experiences. <br />Currently working at Froogal, India.</Typography>
            <Button variant="outlined" color="primary" onClick={() => this.goTo(1)} style={{marginRight:10}}>
              Know More
            </Button>
            <Button variant="outlined" color="secondary">
              Contact
            </Button>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          id="Nav"
          offset={0}
          speed={0.3}
          factor={0}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: `calc(100vh - 50vh)`, background:'red' }}
        >
          <Navbar
            title="Shubham"
            rightButtons={[
              { name: 'Home', onClick: () => this.goTo(0.09) },
              { name: 'About', onClick: () => this.goTo(1), color: 'secondary', }
            ]}
          />
        </ParallaxLayer>

      </Parallax>
    )
  }
}