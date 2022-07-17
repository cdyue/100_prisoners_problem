package main

import (
	"fmt"
	"math/rand"
	"time"
)

const (
	_num   = 10000    //number of prisoner, box
	_limit = _num / 2 //round limit
)

func main() {
	startTime := time.Now().UTC()

	prisoners, boxes := make([]int, _num), make([]int, _num)

	for i := 1; i <= _num; i++ {
		prisoners[i-1] = i
		boxes[i-1] = i
	}
	randSlice(boxes)
	// fmt.Println("boxes:", boxes)
	// fmt.Println("prisoners:", prisoners)

	result := make([]bool, _num)
	for _, v := range prisoners {
		found := false
		target := v
		for i := _limit; i > 0; i-- {
			openedBox := boxes[target-1]
			if openedBox == v {
				found = true
				continue
			} else {
				target = openedBox
			}
		}
		// fmt.Printf("prisoner %d : %t", v, found)
		result[v-1] = found
	}
	// fmt.Println("result:", result)
	duration := time.Now().Sub(startTime).Microseconds()
	fmt.Printf("total result: %s, duration: %d microseconds", checkResult(result), duration)

}

func randSlice(slice []int) {

	length := len(slice)

	rand.Seed(time.Now().Unix())
	for i := length - 1; i >= 0; i-- {
		j := rand.Intn(length)
		swap(i, j, slice)
	}
	return
}

func swap(i, j int, arr []int) {
	arr[i], arr[j] = arr[j], arr[i]
}

func checkResult(result []bool) string {
	for _, v := range result {
		if !v {
			return "lose"
		}
	}
	return "win"
}
