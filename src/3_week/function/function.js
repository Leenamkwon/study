// 렉시컬 스코프: 태어났을때 환경을 기억한다.

const name = '이남권'

function getName() {
  console.log(name) // '이남권'
  return name
}

function foo() {
  const name = 'foo name'

  getName()
}

foo()

// 클로저
function fooClosure() {
  const name = '이남권'
  return () => {
    console.log('name', name)
  }
}

const nameFoo = fooClosure()
nameFoo()

// setTimeout
function timmer() {
  for (var i = 0; i <= 10; i += 1) {
    setTimeout(() => {
      console.log(i)
    }, 0)
  }
}
timmer()
// let으로 고치면 사용할 수 있다.
