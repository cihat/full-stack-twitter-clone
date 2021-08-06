const fs = require("fs")
const flatted = require("flatted")

class BaseDatabase {
  constructor(model) {
    this.model = model
    this.filename = model.name.toLowerCase()
  }

  // save(objects) {
  //   return new Promise((resolve, reject) => {
  //     fs.writeFile(
  //       `${__dirname}/${this.filename}.json`,
  //       flatted.stringify(objects, null, 2),
  //       (err) => {
  //         if (err) return reject(err)
  //         resolve()
  //       }
  //     )
  //   })
  // }

  // load() {
  //   return new Promise((resolve, reject) => {
  //     fs.readFile(`${__dirname}/${this.filename}.json`, "utf8", (err, file) => {
  //       if (err) return reject(err)

  //       const objects = flatted.parse(file)

  //       resolve(objects.map(this.model.create))
  //     })
  //   })
  // }

  save(objects) {
    fs.writeFileSync(
      `${__dirname}/${this.filename}.json`,
      flatted.stringify(objects, null, 2)
    )

    console.log(objects)
  }

  load() {
    const file = fs.readFileSync(`${__dirname}/${this.filename}.json`, "utf8")
    const objects = flatted.parse(file)

    console.log(objects)

    return objects.map(this.model.create)
  }

  async insert(object) {
    // return this.load().then((objects) => this.save(objects.concat(object)))
    const objects = await this.load()
    return this.save(objects.concat(object))
  }

  remove(index) {
    const objects = this.load()

    objects.splice(index, 1)
    this.save(objects)
  }

  async removeBy(property, value) {
    const objects = await this.load()

    const index = objects.findIndex((o) => o[property] == value)

    if (index == -1)
      throw new Error(
        `Cannot find ${this.model.name} instance with ${property} ${value}`
      )

    objects.splice(index, 1)
    await this.save(objects)
  }

  update(object) {
    const objects = this.load()

    const index = objects.findIndex((o) => o.id == object.id)

    if (index == -1)
      throw new Error(
        `Cannot find ${this.model.name} instance with id ${object.id}`
      )

    objects.splice(index, 1, object)
    this.save(objects)
  }

  async find(id) {
    const objects = await this.load()
    return objects.find((o) => o.id == id)

    // if (err) return callback(err)
    // callback(null, objects.find(o => o.id === id))
  }

  async findBy(property, value) {
    return (await this.load()).find((o) => o[property] == value)
  }
}

module.exports = BaseDatabase
