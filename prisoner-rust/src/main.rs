use std::time::SystemTime;

const _NUM: usize = 100000;

fn main() {
    let start_time = SystemTime::now();

    let _limit = _NUM / 2;

    let mut prisoners = Box::new([0; _NUM]);
    let mut boxes = Box::new([0; _NUM]);
    // let mut prisoners = Box::new([0; _NUM]);
    // let mut boxes = Box::new([0; _NUM]);

    let mut i = 1;
    while i <= _NUM {
        prisoners[i - 1] = i;
        boxes[i - 1] = i;
        i += 1;
    }
    // for element in boxes {}
    random_array(&mut boxes);
    // println!("prisoners: {:?}", prisoners);
    // println!("boxes: {:?}", boxes);

    let mut result: [bool; _NUM] = [false; _NUM];
    // for p in prisoners {
    for p in prisoners.as_slice() {
        let mut found = false;
        let mut target = *p;

        for _i in 1.._limit {
            // println!("select target:{}", target);
            let opened_box = boxes[target - 1];
            if *p == opened_box {
                // println!("winner:{}", p);
                found = true;
                break;
            } else {
                target = opened_box;
            }
        }
        result[p - 1] = found
    }

    let duration = SystemTime::now().duration_since(start_time);
    println!(
        "Result: {} , Duration: {} microseconds",
        check_result(result),
        duration.unwrap().as_micros()
    );
}

fn random_array(arr: &mut [usize; _NUM]) {
    use rand::Rng;

    let mut random = rand::thread_rng();

    for i in 0.._NUM - 1 {
        let b = random.gen_range(0.._NUM - 1);
        arr.swap(i, b)
    }
}

fn check_result(arr: [bool; _NUM]) -> &'static str {
    for i in arr {
        if !i {
            return "lose";
        }
    }
    return "win";
}
