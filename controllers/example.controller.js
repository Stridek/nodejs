const Example = require("../models/example.model")

module.exports.createExample = async (req, res) => {
  try{
    const example = await Example.create({ property_one: req.body.one, property_two: req.body.two })
    res.json({ example })
  }catch(error){
    console.error(error)
    res.status(500).json({ message: 'Something went wrong', error: error })
  }
}

module.exports.findOneExample = async (req, res) => {
  try{
    const example = await Example.findOne({ property_one: req.params.property_one })
    res.json({ example })
  }catch(error){
    console.error(error)
    res.status(500).json({ message: 'Something went wrong', error: error })
  }
}

module.exports.findManyExamples = async (req, res) => {
  try{
    const examples = await Example.find({ property_one: req.params.property_one })
    res.json({ examples })
  }catch(error){
    console.error(error)
    res.status(500).json({ message: 'Something went wrong', error: error })
  }
}

module.exports.deleteExample = async (req, res) => {
  try{
    const example = await Example.deleteOne({ property_one: req.params.property_one })
    res.json({ example })
  }catch(error){
    console.error(error)
    res.status(500).json({ message: 'Something went wrong', error: error })
  }
}
