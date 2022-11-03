
let _num = 100000; //number of prisoner, box
let _limit = _num / 2;//round limit

function run() {
  let hr_start_time = process.hrtime();
  let start_time = hr_start_time[0] * 1000000 + hr_start_time[1] / 1000;

  let prisoners = [];
  let boxes = [];

  for (let i = 1; i <= _num; i++) {
    prisoners[i] = i;
    boxes[i] = i;
  };
  prisoners = randSlice(prisoners);
  boxes = randSlice(boxes);
  // console.log("prisoners:" + prisoners)
  // console.log("boxes:" + boxes)

  let round = 0;
  let result = [];

  for (let i = 0; i < _num; i++) {
    let found = false;
    let target = prisoners[i]
    for (let j = 0; j < _num; j++) {
      let open_box = boxes[target - 1]
      round++;
      if (open_box == target) {
        found = true;
        break;
      } else {
        target = open_box
      }
    }
    result[i] = found;
  }

  let hr_end_time = process.hrtime();
  let end_time = hr_end_time[0] * 1000000 + hr_end_time[1] / 1000;
  let duration = end_time - start_time;
  // console.log("prisoners:" + prisoners)
  // console.log("boxes:" + boxes)

  // console.log(result);
  console.log("Total result: " + checkResult(result) + ", Duration: " + duration + " microseconds, Total round: " + round + ", Round/Microsecond: " + round / duration);
}

function randSlice(arr) {
  for (let i = 0; i < _num; i++) {
    let r = Math.floor(Math.random() * _num);
    let temp = arr[i];
    arr[i] = arr[r];
    arr[r] = temp;
  }
  return arr
}

function checkResult(result) {
  if (!result) {
    return "lose";
  }
  if (result.length == 0) {
    return "lose";
  }
  for (let i = 0; i < result.length; i++) {
    if (!result[i]) {
      return "lose";
    }
  }
  return "win";
}

run();