require('shelljs/global');


const data = JSON.parse(cat('data.json'));

var obj = {};
data.forEach(item => {
  if (item.areaName === '全國不分區' || item.areaName.indexOf('原住民') !== -1) return;
  
  const city = item.areaName.substr(0, 3);
  if (!obj[city]) {
    obj[city] = {};
  }
  
  item.district.split('、').forEach(district => {
    if (!obj[city][district]) {
      obj[city][district] = item;
    }
  });
  
});

// console.log(obj);

JSON.stringify(obj, null, 2).to('../src/legislators.json');
