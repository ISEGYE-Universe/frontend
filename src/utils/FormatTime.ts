// 한 자리 수 앞에 leading zero 붙여주는 함수
export const addZero = (num: number) => {
  return num < 10 ? `0${num}` : num
}

// second -> mm:ss로 변환해주는 함수
// e.g. 241 -> 04:01
export const formatSecondToMinutes = (time: number) => {
  const second = Math.floor(Math.round(time) % 60)
  const minute = Math.floor(Math.round(time) / 60)

  return `${addZero(minute)}:${addZero(second)}`
}
