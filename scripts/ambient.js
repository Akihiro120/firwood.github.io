const canvas = document.getElementById("ambient_canvas");
const ctx = canvas.getContext("2d");

let lines = [];
let width, height;
const line_count = 20;

function resize_canvas() {
	 width = canvas.width = window.innerWidth;
	 height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize_canvas);
resize_canvas();

// Line class
class Line {
  constructor(x, y, length, speed, direction, color, opacity) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.speed = speed;
    this.direction = direction; // 'horizontal' or 'vertical'
    this.color = color;
    this.opacity = opacity;
  }

  update() {
    if (this.direction === 'horizontal') {
      this.x += this.speed;
      if (this.x > width) this.x = -this.length;
    } else {
      this.y += this.speed;
      if (this.y > height) this.y = -this.length;
    }
  }

  draw(ctx) {
    ctx.strokeStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.beginPath();
    if (this.direction === 'horizontal') {
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x + this.length, this.y);
    } else {
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x, this.y + this.length);
    }
    ctx.stroke();
    ctx.globalAlpha = 1.0; // Reset alpha
  }
}

function initLines() {
  lines = [];
  for (let i = 0; i < line_count; i++) {
    const direction = Math.random() > 0.5 ? 'horizontal' : 'vertical';
    const length = direction === 'horizontal' ? Math.random() * width * 0.5 : Math.random() * height * 0.5;
    const speed = 0.5 + Math.random() * 0.2;
    const color = '#858585'; 
    const opacity = 0.2 + Math.random() * 0.3;
    const x = Math.random() * width;
    const y = Math.random() * height;
    lines.push(new Line(x, y, length, speed, direction, color, opacity));
  }
}

initLines();
function animate() {
	 ctx.clearRect(0, 0, canvas.width, canvas.height);
	 lines.forEach(line => {
		  line.update();
		  line.draw(ctx);
	 });

	 ctx.strokeStyle = 'white';
	 ctx.lineWidth = 1;

	 ctx.beginPath();
	 ctx.moveTo(80 + 450, 0);
	 ctx.lineTo(80 + 450, height);
	 ctx.stroke();


	 ctx.beginPath();
	 ctx.moveTo(0 + 450, 600);
	 ctx.lineTo(width - 1000 + 450, 600);
	 ctx.stroke();

	 ctx.beginPath();
	 ctx.moveTo(820 + 350, 470);
	 ctx.lineTo(820 + 350, 730);
	 ctx.stroke();

	 ctx.strokeStyle = '#818181';
	 ctx.lineWidth = 1;

	 ctx.beginPath();
	 ctx.moveTo(0 + 450, 385);
	 ctx.lineTo(width - 550 + 450, 385);
	 ctx.stroke();

	 ctx.beginPath();
	 ctx.moveTo(770 + 350, 200);
	 ctx.lineTo(770 + 350, 630);
	 ctx.stroke();

	 requestAnimationFrame(animate);

}


animate();
