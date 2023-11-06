"use client";

import React, { Component } from "react";
import * as ReactDOM from "react-dom";
import Sketch from "react-p5";

class MySketch extends Component {
  myParticles = [];
  basePoints = 4;
  numSets = 4;
  lastParticleGrabbed = 0;
  margin = 20;
  webScale = 1.3;
  dotScale = 1 / 0.8;
  xOffSet = 550;
  springConstant = 0.1;
  restLength = 100;
  color1 = [110, 16, 250];
  whichParticleIsGrabbed = -1;

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(700, 500).parent(canvasParentRef);
    this.createParticles(p5);
  };

  createParticles = (p5) => {
    for (let i = 0; i < this.basePoints * 2; i++) {
      let newParticle;
      if (i < this.basePoints) {
        newParticle = new Particle("basePoint");
      } else {
        newParticle = new Particle("edgePoint");
      }

      if (i == 0) {
        newParticle.set(200 + xOffSet, 150);
      } else if (i == 1) {
        newParticle.set(150 + xOffSet, 100);
      } else if (i == 2) {
        newParticle.set(150 + xOffSet, 50);
      } else if (i == 3) {
        newParticle.set(200 + xOffSet, 50);
      } else if (i == 4) {
        newParticle.set(150 + xOffSet, 100);
      } else if (i == 5) {
        newParticle.set(50 + xOffSet, 100);
      } else if (i == 6) {
        newParticle.set(50 + xOffSet, 50);
      } else if (i == 7) {
        newParticle.set(150 + xOffSet, 50);
      }

      // newParticle.set((50*i + 200),(50*i + 100));

      newParticle.bHardBoundaries = true;

      myParticles.push(newParticle);
    }
  };

  mousePressed = (p5) => {
    this.whichParticleIsGrabbed = -1;
    let maxDist = 9999;
    for (let i = 0; i < this.myParticles.length; i++) {
      let dx = p5.mouseX - this.myParticles[i].px;
      let dy = p5.mouseY - this.myParticles[i].py;
      let dh = p5.sqrt(dx * dx + dy * dy);
      if (dh < maxDist) {
        maxDist = dh;
        this.whichParticleIsGrabbed = i;
        this.lastParticleGrabbed = i;
      }
    }
  };

  draw = (p5) => {
    p5.background(255);

    for (let i = 0; i < this.myParticles.length; i++) {
      this.myParticles[i].addForce(0, 0.1);
      this.myParticles[i].update();
    }

    if (p5.mouseIsPressed && this.whichParticleIsGrabbed > -1) {
      this.myParticles[this.whichParticleIsGrabbed].px = p5.mouseX;
      this.myParticles[this.whichParticleIsGrabbed].py = p5.mouseY;
    }

    p5.fill(this.color1[0], this.color1[1], this.color1[2], 100);
    p5.strokeWeight(0);

    this.makeRect(2, 3, 7, 1, p5);
    this.makeTriangle(7, 1, 4, p5);
    this.makeRect(6, 7, 4, 5, p5);

    p5.fill(this.color1[0], this.color1[1], this.color1[2], 50);

    this.makeRect(7, 3, 0, 4, p5);
    this.makeRect(7, 1, 2, 6, p5);

    for (let i = 0; i < this.basePoints; i++) {
      let a = this.myParticles[i];
      let b = this.myParticles[(i + 1) % this.basePoints];
      let c = this.myParticles[i + this.basePoints];

      p5.fill(255);
      p5.strokeWeight(1);

      this.springCalculateDraw(a, b, 1, p5);
      this.springCalculateDraw(a, c, 1, p5);
    }

    for (let i = this.basePoints; i < this.basePoints + 3; i++) {
      let a = this.myParticles[i];
      let b = this.myParticles[i + 1];
      let c = this.myParticles[i - this.basePoints + 1];
      this.springCalculateDraw(a, b, 1, p5);
    }

    this.springCalculateDraw(
      this.myParticles[0],
      this.myParticles[2],
      1 / p5.sqrt(2),
      p5
    );
    this.springCalculateDraw(
      this.myParticles[4],
      this.myParticles[3],
      1 / p5.sqrt(2),
      p5
    );
    this.springCalculateDraw(
      this.myParticles[6],
      this.myParticles[4],
      1 / p5.sqrt(2),
      p5
    );
    this.springCalculateDraw(
      this.myParticles[2],
      this.myParticles[5],
      1 / p5.sqrt(2),
      p5
    );
    this.springCalculateDraw(this.myParticles[7], this.myParticles[2], 2.5, p5);
    this.springCalculateDraw(this.myParticles[4], this.myParticles[1], 2.5, p5);

    this.springCalculateDraw(myParticles[6], myParticles[3], 0.8, p5);
    this.springCalculateDraw(myParticles[5], myParticles[0], 0.8, p5);

    this.springCalculateDraw(myParticles[6], myParticles[0], 0.6, p5);
    this.springCalculateDraw(myParticles[5], myParticles[3], 0.6, p5);

    this.springCalculateDraw(myParticles[7], myParticles[4], 1, p5);

    for (let i = 0; i < this.myParticles.length; i++) {
      this.myParticles[i].render(i, p5);
    }

    fill(255);
    noStroke();

    strokeWeight(1);
  };

  makeRect = (a, b, c, d, p5) => {
    p5.beginShape();
    p5.vertex(myParticles[a].px, myParticles[a].py);
    p5.vertex(myParticles[b].px, myParticles[b].py);
    p5.vertex(myParticles[c].px, myParticles[c].py);
    p5.vertex(myParticles[d].px, myParticles[d].py);
    p5.endShape(p5.CLOSE);
  };

  makeTriangle = (a, b, c, p5) => {
    p5.beginShape();
    p5.vertex(myParticles[a].px, myParticles[a].py);
    p5.vertex(myParticles[b].px, myParticles[b].py);
    p5.vertex(myParticles[c].px, myParticles[c].py);
    p5.endShape(p5.CLOSE);
  };

  springCalculateDraw = (p, q, factor, p5) => {
    var dx = p.px - q.px;
    var dy = p.py - q.py;
    var dh = factor * p5.sqrt(dx * dx + dy * dy) * webScale;
    if (dh > 1) {
      var distention = dh - restLength;
      var restorativeForce = springConstant * distention; // F = -kx
      var fx = (dx / dh) * restorativeForce;
      var fy = (dy / dh) * restorativeForce;
      p.addForce(-fx, -fy);
      q.addForce(fx, fy);
    }

    p5.strokeWeight(1);
    if (
      (p === myParticles[5] || q === myParticles[5]) &&
      (p === myParticles[1] || q === myParticles[1])
    ) {
      p5.stroke(255, 255, 255, 0);
    } else if (factor === 1) {
      p5.stroke(color1[0], color1[1], color1[2]);
    } else {
      p5.stroke(255, 255, 255, 0);
    }
    p5.line(p.px, p.py, q.px, q.py);
  };

  getDistance = (x1, x2, y1, y2, p5) => {
    return p5.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  };

  Particle = (status, p5) => {
    this.px = 0;
    this.py = 0;
    this.vx = 0;
    this.vy = 0;
    this.mass = 1.0;
    this.damping = 0.96;

    this.bFixed = false;
    this.bLimitVelocities = true;
    this.bPeriodicBoundaries = true;
    this.bHardBoundaries = false;
    if (status == "basePoint") {
      this.isEdgePoint = false;
    } else {
      this.isEdgePoint = true;
    }

    this.set = function (x, y) {
      this.px = x;
      this.py = y;
      this.vx = 0;
      this.vy = 0;
      this.damping = 0.96;
      this.mass = 1.0;
    };

    this.addForce = function (fx, fy) {
      var ax = fx / this.mass;
      var ay = fy / this.mass;
      this.vx += ax;
      this.vy += ay;
    };

    this.update = function () {
      if (this.bFixed === false) {
        this.vx *= this.damping;
        this.vy *= this.damping;

        this.limitVelocities();
        this.handleBoundaries();
        this.px += this.vx;
        this.py += this.vy;
      }
    };

    this.limitVelocities = function (p5) {
      if (this.bLimitVelocities) {
        var speed = p5.sqrt(this.vx * this.vx + this.vy * this.vy);
        var maxSpeed = 10;
        if (speed > maxSpeed) {
          this.vx *= maxSpeed / speed;
          this.vy *= maxSpeed / speed;
        }
      }
    };

    this.handleBoundaries = function (p5) {
      if (this.bPeriodicBoundaries) {
        if (this.px > width - margin) this.px = width - margin;
        if (this.px < 0) this.px = 0;
        if (this.py > height - margin) this.py = height - margin;
        if (this.py < 0) this.py = 0;
      } else if (this.bHardBoundaries) {
        if (this.px >= width) {
          this.vx = p5.abs(this.vx) * -1;
        }
        if (this.px <= 0) {
          this.vx = p5.abs(this.vx);
        }
        if (this.py >= height) {
          this.vy = p5.abs(this.vy) * -1;
        }
        if (this.py <= 0) {
          this.vy = p5.abs(this.vy);
        }
      }
    };

    this.render = function (number, p5) {
      p5.fill(255);
      p5.strokeWeight(1);
      p5.stroke(color1[0], color1[1], color1[2]);
      if (number != 1) {
        p5.ellipse(this.px, this.py, 10 * dotScale, 10 * dotScale);
      }
    };
  };

  render() {
    return (
      <Sketch
        setup={this.setup}
        draw={this.draw}
        mousePressed={this.mousePressed}
      />
    );
  }
}
