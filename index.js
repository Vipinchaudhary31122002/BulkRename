const fs = require("fs");
const path = require("path");
const replaceThis = "monday";
const replacewith = "thanos";
const folder = __dirname;

try {
  fs.readdir(".", (err, data) => {
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      let oldfile = path.join(folder, item);
      let newfile = path.join(folder, item.replace(replaceThis, replacewith));
      fs.rename(oldfile, newfile, () => {
        console.log("Rename Success");
      });
    }
  });
} catch (err) {
  console.error(err);
}
