import window from 'window'
//http://lab.hakim.se/wave/03/

export default function Wave({ canvasEl, height, color }) {

  /** The current dimensions of the screen (updated on resize) */
  var WIDTH = canvasEl.offsetWidth;
  var HEIGHT = canvasEl.offsetHeight;

  var heightRato = height || 0.5; // height from the top

  /** Wave settings */
  var DENSITY = 0.6;
  var FRICTION = 1.07;
  var MOUSE_PULL = 0.09; // The strength at which the mouse pulls particles within the AOE
  var AOE = 200; // Area of effect for mouse pull
  var DETAIL = Math.round( WIDTH / 60 ); // The number of particles used to build up the wave
  var TWITCH_INTERVAL = 3000; // The interval between random impulses being inserted into the wave to keep it moving
  var TWITCH_FORCE = 6; // The force the twitch
  var MAX_FORCE = 10; // The max force the mouse can add
  var COLOR = color || 'rgb(72, 207, 174)';

  var mouseIsDown, isDownloadingTweets = false;
  var ms = {x:0, y:0}; // Mouse speed
  var mp = {x:0, y:0}; // Mouse position

  var canvas = canvasEl
  var context, particles;

  var timeUpdateInterval, twitchInterval;

  /**
   * Constructor.
   */
  this.Initialize = function() {
    if (canvas && canvas.getContext) {
      context = canvas.getContext('2d');

      particles = [];

      // Generate our wave particles
      for( var i = 0; i < DETAIL+1; i++ ) {
        particles.push({
          x: WIDTH / (DETAIL-4) * (i-2), // Pad by two particles on each side
          y: HEIGHT * heightRato,
          original: {x: 0, y: HEIGHT * heightRato},
          velocity: {x: 0, y: Math.random()*3}, // Random for some initial movement in the wave
          force: {x: 0, y: 0},
          mass: 10
        });
      }

      // $(canvas).mousemove(MouseMove);
      // $(window ).resize(ResizeCanvas);
      window.addEventListener('mousemove', MouseMove);

      window.addEventListener('resize', ResizeCanvas);

      timeUpdateInterval = setInterval( TimeUpdate, 40 );
      twitchInterval = setInterval( Twitch, TWITCH_INTERVAL );
      ResizeCanvas();
    }
  }

  /**
   * Inserts a random impulse to keep the wave moving.
   * Impulses are only inserted if the mouse is not making
   * quick movements.
   */
  function Twitch() {
    if( ms.x < 6 || ms.y < 6 ) {
      const forceDirection = -1; // Always up
      // const forceDirection = Math.random() - 0.5 > 0 ? 1 : -1;
      const forceRandom = Math.random() + 0.5
      const forceSide = Math.random() - 0.5 > 0 ? 'right' : 'left';
      // const forcePositon = Math.random() * WIDTH
      const forcePositon = forceSide === 'left' ? (WIDTH * 0.05) : (WIDTH * 0.95);
      const forceMagnitude = forceDirection * forceRandom * TWITCH_FORCE;
      InsertImpulse(forcePositon, forceMagnitude);
    }
  }

  /**
   * Inserts an impulse in the wave at a specific position.
   *
   * @param positionX the x coordinate where the impulse
   * should be inserted
   * @param forceY the force to insert
   */
  function InsertImpulse( positionX, forceY ) {
    const particle = particles[Math.round( positionX / WIDTH * particles.length )];
    if (particle) {
      particle.force.y += forceY
    }
  }

  /**
   *
   */
  function TimeUpdate() {
    context.clearRect(0, 0, WIDTH, HEIGHT);
    context.fillStyle = COLOR;
    context.beginPath();
    context.moveTo(particles[0].x, particles[0].y);

    var len = particles.length;
    var i;

    var current, previous, next;

    for( i = 0; i < len; i++ ) {
        current = particles[i];
        previous = particles[i-1];
        next = particles[i+1];

        if (previous && next) {
          var forceY = 0;

          forceY += -DENSITY * ( previous.y - current.y );
          forceY += DENSITY * ( current.y - next.y );
          forceY += DENSITY/15 * ( current.y - current.original.y );

          current.velocity.y += - ( forceY / current.mass ) + current.force.y;
          current.velocity.y /= FRICTION;
          current.force.y /= FRICTION;
          current.y += current.velocity.y;

          var distance = DistanceBetween( mp, current );

          if( distance < AOE ) {
            var distance = DistanceBetween( mp, {x:current.original.x, y:current.original.y} );
            ms.x = ms.x * .98;
            ms.y = ms.y * .98;
            current.force.y += (MOUSE_PULL * ( 1 - (distance / AOE) )) * ms.y;
          }

          // cx, cy, ax, ay
          context.quadraticCurveTo(previous.x, previous.y, previous.x + (current.x - previous.x) / 2, previous.y + (current.y - previous.y) / 2);
        }

    }

    context.lineTo(particles[particles.length-1].x, particles[particles.length-1].y);
    context.lineTo(WIDTH, HEIGHT);
    context.lineTo(0, HEIGHT);
    context.lineTo(particles[0].x, particles[0].y);

    context.fill();

    context.fillStyle = "#rgba(0,200,255,0)";
  }

  /**
   *
   */
  function MouseMove(e) {
    ms.x = Math.max( Math.min( e.layerX - mp.x, MAX_FORCE ), -MAX_FORCE );
    ms.y = Math.max( Math.min( e.layerY - mp.y, MAX_FORCE ), -MAX_FORCE );

    mp.x = e.layerX;
    mp.y = e.layerY;
  }
  /**
   *
   */
  function ResizeCanvas(e) {
    WIDTH = canvasEl.offsetWidth;
    HEIGHT = canvasEl.offsetHeight;

    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    for( var i = 0; i < DETAIL+1; i++ ) {
      particles[i].x = WIDTH / (DETAIL-4) * (i-2);
      particles[i].y = HEIGHT*heightRato;

      particles[i].original.x = particles[i].x;
      particles[i].original.y = particles[i].y;
    }
  }

  /**
   *
   */
  function DistanceBetween(p1,p2) {
      var dx = p2.x-p1.x;
      var dy = p2.y-p1.y;
      return Math.sqrt(dx*dx + dy*dy);
  }

}
