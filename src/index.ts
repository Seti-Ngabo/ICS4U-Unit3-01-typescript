/**
 * This program reverses the string
 * using recursion.
 *
 * By:      Seti Ngbao
 * Version: 1.0
 * Since:   2022-11-07
 */

/**
 * reverseString
 *
 * @param {string} inserted str
 * @returns {string} the reversed string.
 */
function reverseString(str: string): string {
  if (str === '') {
    return str
  } else {
    return reverseString(str.slice(1)) + str.slice(0, 1)
  }
}

// Input
const stringInput = 'recursion'

// Output
console.log()
console.log(`The original string is: ${stringInput}`)
console.log(`The reversed string is: ${reverseString(stringInput)}`)

console.log('\nDone.')
