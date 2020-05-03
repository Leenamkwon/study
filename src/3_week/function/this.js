// 기본 함수호출 패턴에서의 this
function foo() {
  console.log(this)
}

foo()

// object 메서드에서의 this

const person = {
  name: '이름',
  getName: function() {
    console.log(this) // person
    console.log(this.name) // 이름

    function innerFunc() {
      console.log(this) // window
    }
    const arrowFunc = () => {
      console.log(this) // person
    }
    innerFunc()
  },
}

// 생성자 함수에서의 this

function Person(name) {
  this.name = name // Person

  this.getName = function() {
    console.log(this)

    function inner() {
      console.log(this) // window
    }
    inner()
  }
}
