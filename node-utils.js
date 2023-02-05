//rename au files in folder

const path = './files/'

for (const oldFile of readdirSync(`${path}`)) {
    const extension = extname(oldFile);
    const name = basename(oldFile, extension);
    fs.rename(`${path}/${oldFile}`, `${path}/${name}.json`, (err) => {
        if (err) throw err;
        console.log('Rename complete!');
    });
}

// rename all files in a group of folder

for (const folder of readdirSync(path)) {
    for (const oldFile of readdirSync(`${path}/${folder}`)) {
        const extension = extname(oldFile);
        const name = basename(oldFile, extension);
        fs.rename(`${path}/${folder}/${oldFile}`, `${path}/${folder}/${name}.json`, (err) => {
            if (err) throw err;
            console.log('Rename complete!');
        });
    }
}

// Read all files from directory and nested directories

let files = [];
const ThroughDirectory = (directory) => {
    fs.readdirSync(directory).forEach(File => {
        const absolute = path.join(directory, File);
        if (fs.statSync(absolute).isDirectory())
            return ThroughDirectory(absolute);
        else return files.push(absolute);
    });
    return files
}