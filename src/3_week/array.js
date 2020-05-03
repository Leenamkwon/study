const arr = [10, 20, 30, 40]

// map 기존의 배열을 복사해서 새로운 배열을 만들 때 쓴다.
const mul2 = arr.map(() => {
  return n * 2
})

console.log(`원본: ${arr}`)
console.log(`map: ${mul2}`)

// filter 기존의 배열을 true/ false 로 판단하여 true면 반환
// 삭제할 때 많이 씀
const filter = arr.filter((n) => {
  return n !== 30
})

console.log(`원본: ${arr}`)
console.log(`filter: ${filter}`)

const todos = [
  {
    id: 0,
    text: `리액트 공부하기`,
    isDone: true,
  },
  {
    id: 1,
    text: `뷰 공부하기`,
    isDone: false,
  },
  {
    id: 2,
    text: `집 가기`,
    isDone: false,
  },
]

const removedTodo = todos.filter((item) => {
  return item.id !== 0
})

console.log(`TODO: ${removedTodo}`)

const doingList = todos.filter((todo) => {
  return !todo.isDone
})

console.log(`완료되지 않은 리스트: ${doingList}`)

// reduce 누적 연산자
// 배열의 최고값 찾기
arr.reduce((prev, current) => {
  return prev < current ? current : prev
}, 0)

arr.reduce(() => {}, []) // map
arr.reduce(() => {}, {})

// Array.includes 값이 있는지 없는지 판단
const FILTER = {
  a: 'a',
  b: 'b',
}

Object.keys(FILTER).includes('a')

// some || / every &&
const numbers = [2, 4, 6, 8]
const isAllEven = numbers.every((n) => {
  return n % 2 === 0
})

console.log(`isAllEven: ${isAllEven}`) // true

// 복사
const newArray = [...arr]
console.log(`기존배열: ${arr}`)
console.log(`바뀐 배열: ${newArray}`)

const todos = [
  {
    id: 0,
    text: '리스트 1',
  },
  {
    id: 1,
    text: '리스트 2',
  },
]

const newTOdo = [...todos, { id: 2, text: '리스트 3' }]
console.log(`todos: ${todos}`)

// 배열 해체 할당
const [todo, todo1] = todos
console.log(todo1.text)
