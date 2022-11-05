import time
import random

_num = 100000
_limit = _num / 2


def main():
    start_time = int(time.time()*1000*1000)
    prisoners = []
    boxes = []
    # print(start_time)
    for x in range(_num):
        prisoners.append(x+1)
        boxes.append(x+1)

    # print(boxes)
    boxes = randSlice(boxes)
    # print(boxes)
    round = 0
    result = []
    for x in prisoners:
        found = False
        target = x
        i = 0
        while i < _limit:
            opened_box = boxes[target - 1]
            round += 1
            i += 1

            # txt = "prision: {}, box: {}"
            # print(txt.format(x, opened_box))
            if opened_box == x:
                found = True
                break
            else:
                target = opened_box
        result.append(found)

    end_time = int(time.time()*1000*1000)
    duration = end_time-start_time
    # print(start_time)
    # print(end_time)
    txt = "Total result: {}, Duration: {} microseconds, Total round: {}, Round/Microsecond: {}"
    print(txt.format(checkResult(result), duration, round, round / duration))


def randSlice(arr):
    i = 0
    while i < len(arr):
        r = random.randint(1, _num)
        temp = arr[r-1]
        arr[r-1] = arr[i]
        arr[i] = temp

        i += 1
    return arr


def checkResult(result):
    for x in result:
        if (x == False):
            return "lose"
    return "win"


main()
