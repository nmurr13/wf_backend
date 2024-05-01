const express = require("express");
const cors = require ('cors');
const { Sequelize, DataTypes } = require("sequelize");
const { config } = require("dotenv");


config();
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: { ssl: { require: true } }
});

const Concert = require('./models/concert')(sequelize, DataTypes);
const Song = require('./models/song')(sequelize, DataTypes);
const Photo = require('./models/photo')(sequelize, DataTypes);
const Record = require('./models/record')(sequelize, DataTypes);
const Video = require('./models/video')(sequelize, DataTypes);


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", async (req, res) => {
  res.send("Hello World! This is the World Famous!");
});

app.post("/concerts", async (req, res) => {
  const { lineup, flyerUrl, date, venue, price } = req.body

  try {
    const concert= await Concert.create({ lineup, flyerUrl, date, venue, price })
    return res.json(concert)
  } catch (err) {
    console.log(err)
    return res.status(500).json(err)
  }
});

app.put("/concerts/:id", async (req, res) => {
  const id = req.params.id
const { lineup, flyerUrl, date, venue, price } = req.body
 try {
    const concert = await Concert.findOne({ where: { id } })
	
    concert.lineup = lineup
    concert.flyerUrl= flyerUrl
    concert.date = date
    concert.venue=venue
    concert.price= price
    await concert.save()

    return res.json(concert)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
})

app.get("/concerts", async (req, res) => {
  try {
    const concerts = await Concert.findAll()

    return res.json(concerts)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
});

app.get("/concerts/:id", async (req, res) => {
  const id = req.params.id
 try {
  const concert = await Concert.findOne({
    where: {id} })
     return res.json(concert)
  }   catch (err) {
      console.log(err)
     return res.status(500).json({ error: 'Something went wrong' })
}
})

app.delete("/concerts/:id", async (req, res) => {
  const id = req.params.id
  try {
    const concert = await Concert.findOne({ where: { id } })

    await concert.destroy()

    return res.json({ message:'Concert deleted!'})
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
});

///
app.post("/records", async (req, res) => {
  const { title, label, imgUrl, releaseDate, trackOne, trackTwo,
  trackThree, trackFour, trackFive, trackSix, trackSeven,
  trackEight, trackNine, trackTen } = req.body

  try {
    const record= await Record.create({ title, label, imgUrl, releaseDate, trackOne, trackTwo,
      trackThree, trackFour, trackFive, trackSix, trackSeven,
      trackEight, trackNine, trackTen })
    return res.json(record)
  } catch (err) {
    console.log(err)
    return res.status(500).json(err)
  }
});

app.put("/records/:id", async (req, res) => {
  const id = req.params.id
const { title, label, imgUrl, releaseDate, trackOne, trackTwo,
  trackThree, trackFour, trackFive, trackSix, trackSeven,
  trackEight, trackNine, trackTen } = req.body
 try {
    const record = await Record.findOne({ where: { id } })
	
   record.title= title
   record.label= label
   record.imgUrl= imgUrl
   record.releaseDate= releaseDate
   record.trackOne= trackOne
   record.trackTwo= trackTwo
   record.trackThree= trackThree
   record.trackFour= trackFour
   record.trackFive= trackFive
   record.trackSix= trackSix
   record.trackSeven= trackSeven
   record.trackEight= trackEight
   record.trackNine= trackNine
   record.trackTen= trackTen
    await record.save()

    return res.json(record)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
})

app.get("/records", async (req, res) => {
  try {
    const records = await Record.findAll()

    return res.json(records)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
});

app.get("/records/:id", async (req, res) => {
  const id = req.params.id
 try {
  const record = await Record.findOne({
    where: {id} })
     return res.json(record)
  }   catch (err) {
      console.log(err)
     return res.status(500).json({ error: 'Something went wrong' })
}
})

app.delete("/records/:id", async (req, res) => {
  const id = req.params.id
  try {
    const record = await Record.findOne({ where: { id } })

    await record.destroy()

    return res.json({ message:'Record deleted!'})
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
});

//

app.post("/songs", async (req, res) => {
  const { title, audioUrl, release } = req.body

  try {
    const song= await Song.create({ title, audioUrl, release })
    return res.json(song)
  } catch (err) {
    console.log(err)
    return res.status(500).json(err)
  }
});

app.put("/songs/:id", async (req, res) => {
  const id = req.params.id
const { title, audioUrl, release } = req.body
 try {
    const song = await Song.findOne({ where: { id } })
	
    song.title= title
    song.audioUrl= audioUrl 
    song.release= release
    await song.save()

    return res.json(song)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
})

app.get("/songs", async (req, res) => {
  try {
    const songs = await Song.findAll()

    return res.json(songs)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
});

app.get("/songs/:id", async (req, res) => {
  const id = req.params.id
 try {
  const song = await Song.findOne({
    where: {id} })
     return res.json(song)
  }   catch (err) {
      console.log(err)
     return res.status(500).json({ error: 'Something went wrong' })
}
})

app.delete("/songs/:id", async (req, res) => {
  const id = req.params.id
  try {
    const song = await Song.findOne({ where: { id } })

    await song.destroy()

    return res.json({ message:'Song deleted!'})
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
});

//

app.post("/photos", async (req, res) => {
  const { title, photoUrl } = req.body

  try {
    const photo= await Photo.create({ title, photoUrl })
    return res.json(photo)
  } catch (err) {
    console.log(err)
    return res.status(500).json(err)
  }
});

app.put("/photos/:id", async (req, res) => {
  const id = req.params.id
const { title, photoUrl } = req.body
 try {
    const photo = await Photo.findOne({ where: { id } })
	
    photo.title= title
    photo.photoUrl= photoUrl 

    await photo.save()

    return res.json(photo)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
})

app.get("/photos", async (req, res) => {
  try {
    const photos = await Photo.findAll()

    return res.json(photos)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
});

app.get("/photos/:id", async (req, res) => {
  const id = req.params.id
 try {
  const photo = await Photo.findOne({
    where: {id} })
     return res.json(photo)
  }   catch (err) {
      console.log(err)
     return res.status(500).json({ error: 'Something went wrong' })
}
});

app.delete("/photos/:id", async (req, res) => {
  const id = req.params.id
  try {
    const photo = await Photo.findOne({ where: { id } })

    await photo.destroy()

    return res.json({ message:'Photo deleted!'})
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
});

//

app.post("/videos", async (req, res) => {
  const { title, videoUrl, description } = req.body

  try {
    const video= await Video.create({ title, videoUrl, description })
    return res.json(video)
  } catch (err) {
    console.log(err)
    return res.status(500).json(err)
  }
});

app.put("/videos/:id", async (req, res) => {
  const id = req.params.id
const { title, videoUrl, description } = req.body
 try {
    const video = await Video.findOne({ where: { id } })
	
    video.title= title
    video.videoUrl= videoUrl 
    video.description= description

    await video.save()

    return res.json(video)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
})

app.get("/videos", async (req, res) => {
  try {
    const videos = await Video.findAll()

    return res.json(videos)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
});

app.get("/videos/:id", async (req, res) => {
  const id = req.params.id
 try {
  const video = await Video.findOne({
    where: {id} })
     return res.json(video)
  }   catch (err) {
      console.log(err)
     return res.status(500).json({ error: 'Something went wrong' })
}
});

app.delete("/videos/:id", async (req, res) => {
  const id = req.params.id
  try {
    const video = await Video.findOne({ where: { id } })

    await video.destroy()

    return res.json({ message:'Video deleted!'})
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
});

app.listen(port, async () => {
  console.log(`Server running on http://localhost:${port}`)
  await sequelize.authenticate()
  console.log('postgres database is connected!')
});