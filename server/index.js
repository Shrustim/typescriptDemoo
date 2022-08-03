const express = require('express');
const path = require('path');
const fs = require("fs"); 
const app = express();

const PORT = process.env.PORT || 3000;
const indexPath  = path.resolve(__dirname, '..', 'build', 'index.html');

// static resources should just be served as they are
app.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));
// here we serve the index.html page
app.get('/*', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
        // get post info
      
        // inject meta tags
        htmlData = htmlData.replace(
            "<title>React App</title>",
            `<title>hello i am shrushti</title>`
        )
        .replace('__META_OG_TITLE__', "test title")
        .replace('__META_OG_DESCRIPTION__', "test DESCRIPTION1")
        .replace('__META_DESCRIPTION__',  "test DESCRIPTION")
        .replace('__META_OG_IMAGE__',  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg")
        return res.send(htmlData);
    });
});
// listening...
app.listen(PORT, (error) => {
    if (error) {
        return console.log('Error during app startup', error);
    }
    console.log("listening on " + PORT + "...");
});