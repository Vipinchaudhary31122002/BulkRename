const fs = require("fs");
const path = require('path');
const replaceThis = "monday";
const replacewith = "thanos";
const preview = true;
const folder = path(__dirname);

try {
  fs.readdir(folder, (err, data) => {
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      let oldfile = path.join(folder, item)
      let newfile = "" + item.replace(replaceThis, replacewith);
      if (!preview) {
        fs.rename(, newfile, () => {
          console.log("Rename Success");
        });
      } else {
        if ("data/" + item !== newfile) {
          console.log("data/" + item + "will be renamed to" + newfile);
        }
      }
    }
  });
} catch (err) {
  console.error(err);
}
