import { SVG_NS } from '../settings';

export default class Ball {
    constructor(radius, boardWidth, boardHeight) {
      this.radius = radius;
      this.boardWidth = boardWidth;
      this.boardHeight = boardHeight;
      this.direction = 1;
    }

    render(svg) {
        let circ = document.createElementNS(SVG_NS, 'circle');
        circ.setAttributeNS(null, 'fill', 'white');
        circ.setAttributeNS(null, 'r', this.radius);
        circ.setAttributeNS(null, 'cx', (this.boardWidth/2));
        circ.setAttributeNS(null, 'cy', (this.boardHeight/2));
    
        svg.appendChild(circ);
    }
  }