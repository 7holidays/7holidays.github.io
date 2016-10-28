require('shelljs/global');

const Converter = require('csvtojson').Converter;
const path = require('path');

const csvFile = path.join(__dirname, 'main.csv');
const legislatorsFile = path.join(__dirname, '..', 'src', 'legislators.json');
const converter = new Converter({});
converter.fromFile(csvFile, (err, data) => {
  if (err) throw err;

  const obj = {};
  data.forEach((item) => {
    if (item.areaName.indexOf('原住民') !== -1) 
      return;

    var city = '';
    if (item.areaName === '全國不分區') {
      city = item.areaName;
    } else {
      city = item.areaName.substr(0, 3);
    }

    if (!obj[city]) {
      obj[city] = {};
    }

    item.district.split('、').forEach((district) => {
      if (!obj[city][district]) {
        obj[city][district] = [item];
      } else {
        obj[city][district].push(item);
      }
    });
  });

  JSON.stringify(obj, null, 2).to(legislatorsFile);
});
