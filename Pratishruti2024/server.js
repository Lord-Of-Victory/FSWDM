// backend/server.js
const express = require('express');
const session = require('express-session');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

let photos = [];
const photosFilePath = path.join(__dirname, '/data/photos.json');

if (fs.existsSync(photosFilePath)) {
  const data = fs.readFileSync(photosFilePath, 'utf8');
  photos = JSON.parse(data);
}

app.get('/', (req, res) => {
  if (!req.session.authenticated) {
    return res.redirect('/authentication/login');
  }
  res.render('gallery',{ photos ,req:req});
});

app.get('/upload', (req, res) => {
  if (!req.session.authenticated) {
    return res.redirect('/authentication/login');
  }
  res.render('uploadImages',{req:req} );
});

app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.session.authenticated) {
    return res.redirect('/authentication/login');
  }
  photos.push({ filename: req.file.originalname });
  savePhotosToJSON();
  res.redirect('/');
});

app.post('/delete/:filename', (req, res) => {
  const filename = req.params.filename;
  fs.unlink(`./public/uploads/${filename}`, (err) => {
    if (err) {
      res.status(500).json({ error: 'Failed to delete photo' });
    } else {
      photos = photos.filter(photo => photo.filename !== filename);
      savePhotosToJSON();
      res.redirect('/');
    }
  });
});

app.post('/delete-all', (req, res) => {
  if (!req.session.authenticated) {
    return res.redirect('/authentication/login');
  }
  photos.forEach(photo => {
    fs.unlink(`./public/uploads/${photo.filename}`, (err) => {
      if (err) {
        console.error(`Failed to delete ${photo.filename}`);
        console.log(err)
      }
    });
  });
  photos = [];
  savePhotosToJSON();
  res.redirect('/');
});

function savePhotosToJSON() {
  fs.writeFileSync(photosFilePath, JSON.stringify(photos, null, 2));
}


const authentication = require('./authentication');
app.use('/authentication', authentication);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
