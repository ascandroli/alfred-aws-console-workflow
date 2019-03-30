const
    fs = require('fs'),
    path = require('path');


const data = JSON.parse(fs.readFileSync('awsc-mezz-data.json', 'utf8'));

const result = {
    "items": []
};

data.services.forEach(function (item, index) {
    if (item.url) {
        result.items.push({
                "uid": item.id,
                "title": item.label,
                "subtitle": item.caption,
                "match": item.id + ' ' + item.label,
                "arg": item.url,
                "autocomplete": item.label,
                "icon": {
                    "path": './icons/' + item.id + '.png'
                }
            }
        )
    }
});

fs.writeFileSync('../awsc-mezz-data.parsed.json', JSON.stringify(result));

