function Stopwatch() {
  let duration = 0;
  let status = 0;
  let intervalId;
  this.start = function () {
    if (status === 1) throw new Error("Stopwatch aleardy started");
    status = 1;
    intervalId = setInterval(() => (duration += 1), 1000);
  };
  this.stop = function () {
    if (status === 0) throw new Error("Stopwatch is not started");
    status = 0;
    clearInterval(intervalId);
  };
  this.reset = function () {
    status = 0;
    clearInterval(intervalId);
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
