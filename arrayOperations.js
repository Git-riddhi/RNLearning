
export const arraySum = (Array) => {
    console.log('Array :', Array)
    var sum = Array.reduce((a, b) => a + b)
    console.log('Sum of array is :', sum)
}

export const ascending = (Array) => {
    Array.sort((a, b) => a - b)
    console.log('Array in Ascending order :', Array)
}
export const descending = (Array) => {
    Array.sort()
    Array.reverse()
    console.log('Array in Descending order :', Array)
}

export const uniqueArray = (Array) => {
    var unique = [...new Set(Array)]
    console.log('Unique Array :', unique)

}

export default { arraySum, uniqueArray, ascending,descending };