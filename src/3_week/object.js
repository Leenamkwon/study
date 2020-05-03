const FILTER = {
  ALL: 'ALL',
  TYPE: 'TYPE',
  AGE: 'AGE',
}

// 접근법
FILTER.ALL
FILTER['ALL']

// fallback
function getFilter(type) {
  return FILTER[type] || FILTER['ALL']
}

getFilter('TYPE')

// object 복사
// FILTER.LEGACY = 'LEGACY'

const NEW_FILTER = { ...FILTER }
NEW_FILTER.LEGACY = 'LEGACY'

console.log(`기존필터: ${JSON.stringify(FILTER)}`)
console.log(`기존필터: ${JSON.stringify(NEW_FILTER)}`)

// 해체 할당
const all = FILTER.ALL
const all2 = FILTER['ALL']

const { ALL, TODO, DONE } = FILTER

// Object.keys
const keys = Object.keys(FILTER)
console.log(`keys: ${keys}`)

// Object.values
const values = Object.values(FILTER)
console.log(`values: ${values}`)
