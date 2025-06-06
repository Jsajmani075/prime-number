const TestHandler = require('../handler/test.handler')

const testController = async (req, res) => {
  try {
    const responseData = await TestHandler(req.body)
    res.status(200).json({ responseData })
  } catch (error) {
    console.log('=====error is =====', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
module.exports = { testController }
