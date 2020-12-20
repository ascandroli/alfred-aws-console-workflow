const
    fs = require('fs'),
    path = require('path');


const data = JSON.parse(fs.readFileSync('../awsc-mezz-data.parsed.json', 'utf8'));
const files = fs.readFileSync('./pngs.txt', 'utf8').split('\n');

const result = {
    "items": []
};

const missing = {
    "items": []
};

const duplicates = {};

function strip(value) {
    return value
        .trim()
        .toLowerCase()
        .replace(/_|-|\s+/g, '')
        .replace(/services/g, '')
        .replace(/service/g, '')
        .replace(/container/g, '')
        .replace(/light/g, '')
        .replace(/console/g, '');
}

function namesMatch(file, title) {
    return strip(file).endsWith(strip(title) + '64.png') || strip(file).endsWith(strip(title) + '48.png')
}

data.items.forEach(function (item, i) {
    var found = false;
    files.forEach(function (file, k) {
        if (item.title) {
            if (namesMatch(file, item.title) || namesMatch(file, item.uid)) {
                var duplicated;
                found = true;
                if (duplicates[item.uid])
                    duplicated = true;
                result.items.push({
                    "uid": item.uid,
                    "fileName": file,
                    "duplicated": duplicated
                });
                duplicates[item.uid] = true;
            }
        }
    });
    if (!found) {
        missing.items.push({
            "uid": item.uid,
            "fileName": '',
        });
    }
});

result.items.forEach(function (item, i) {
    if (!item.duplicated) {
        fs.createReadStream(item.fileName).pipe(fs.createWriteStream('pngs/' + item.uid + '.png'));
    }
});

missing.items.forEach(function (item, i) {
    fs.createReadStream('aws-default-icon.png').pipe(fs.createWriteStream('pngs/' + item.uid + '.png'));
});

fs.writeFileSync('icons.json', JSON.stringify(result));
fs.writeFileSync('missing-icons.json', JSON.stringify(missing));

