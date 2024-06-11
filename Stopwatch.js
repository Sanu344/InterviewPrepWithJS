function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Already Started");
    startTime = new Date();
    running = true;
  };

  this.stop = function () {
    if (!running) throw new Error("Already Stopped");
    endTime = new Date();
    running = false;
    duration = (endTime.getTime() - startTime.getTime()) / 1000;
  };

  this.reset = function () {
    running = false;
    startTime = 0;
    endTime = 0;
  };

  Object.defineProperty(this, "dur", {
    get: function () {
      return duration;
    },
  });
}

module.exports = StopWatch;
