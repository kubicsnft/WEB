import React, { Component } from "react";
import Radium from "radium";

const styles = {
  cubeContainer: {
    height: "100%",
    width: "100%",
    position: "relative",
    perspective: "2500px",
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  cube: {
    height: "50%",
    width: "50%",
    position: "relative",
    transformStyle: "preserve-3d",
    transform: "translateZ(-300px)",
    marginBottom:'200px',
    marginLeft:'-200px',
    ":hover": {},
    // transition: "transform 0.5s, rotate 0.5s"
  },
  face: {
    width: "200px",
    height: "200px",
    display: "absolute",
    position: "absolute",
    border: "1px solid hsl(212, 26%, 59%,0.5)",
    // transition: "transform 1s",
    color: "white",
    fontSize: 0,
    textAlign: "center",
    lineHeight: "200px",
    background: "hsl(212, 26%, 59%,0.2)",
    boxShadow: "0px 0px 70px 10px hsl(212, 26%, 59%,0.5)"
  },
  front: {
    transform: "rotateY(   0deg ) translateZ( 100px )"
  },
  back: {
    transform: "rotateX( 180deg ) translateZ( 100px )"
  },
  left: {
    transform: "rotateY( -90deg ) translateZ( 100px )"
  },
  right: {
    transform: "rotateY(  90deg ) translateZ( 100px )"
  },
  top: {
    transform: "rotateX(  90deg ) translateZ( 100px )"
  },
  bottom: {
    transform: "rotateX( -90deg ) translateZ( 100px )"
  }
};

class Cube extends Component {
  state = {
    intervallId: null,
    degX: 0
  };
//   interpolate = () => {};
//   componentDidMount() {
//     let { degX } = this.state;
//     const intervallId = setInterval(() => {
//       degX = degX + (1 % 360);
//       this.setState({
//         degX
//       });
//     }, 200);
//     this.setState({ intervallId });
//   }
//   componentWillUnmount() {
//     clearInterval(this.state.intervallId);
//     this.setState({
//       intervallId: null
//     });
//   }
  render() {
    const { degX } = this.state;
    return (
      <div className="flex justify-center">
        <div style={styles.cubeContainer}>
          <div
            style={[
              styles.cube,
              {
                // transform: `translateZ(-400px) rotate3d(0, 1, 1, ${degX}deg)`
                transform: `translateZ(-400px) rotate3d(-1,2, 0, 15deg)`
              }
            ]}
          >
            <div style={[styles.face, styles.front]}>front</div>
            <div style={[styles.face, styles.back]}>back</div>
            <div style={[styles.face, styles.left]}>left</div>
            <div style={[styles.face, styles.right]}>right</div>
            <div style={[styles.face, styles.top]}>top</div>
            <div style={[styles.face, styles.bottom]}>bottom</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(Cube);