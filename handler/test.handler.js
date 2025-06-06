const TestHandler = async ({ num }) => {
  try {
    if (num <= 1) return 'It is not a prime number'

    for (let i = 2; i < num; i++) {
      if (num % i == 0) return 'it is not a prime number'
    }
    return 'it is prime number'
  } catch (error) {
    console.log('=====error is======', error)
  }
}
module.exports = TestHandler
