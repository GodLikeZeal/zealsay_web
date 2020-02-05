const qiniu = require("qiniu");
const glob = require("glob");
const mime = require("mime");
const path = require("path");

const isWindow = /^win/.test(process.platform);

let pre = path.resolve(__dirname, "../dist/") + (isWindow ? "\\" : "");

const files = glob.sync(
  `${path.join(
    __dirname,
    "../dist/**/*.?(js|css|map|png|jpg|svg|gif|woff|woff2|ttf|eot|moc|mtn|json)"
  )}`
);
pre = pre.replace(/\\/g, "/");

var config = {
  qiniu: {
    accessKey: "lJZkL3SdRJd4peLo4Rsf2E3wbI04SAdIA7Jo4jIx", // accessKey
    secretKey: "b2QgZ80sLddhJsP3BmsnFPGdRxUGZjqRYB1x9TKL", // secretKey
    bucket: "zealsay-blog",
    domain: "https://pan.zealsay.com" // cdn 域名
  }
};
async function uploadFileCDN(files) {
  files.map(async file => {
    const key = getFileKey(pre, file);
    try {
      await uploadFIle(key, file);
    } catch (err) {
      console.log("error", err);
    }
  });
}
async function uploadFIle(key, localFile) {
  const options = {
    scope: config.qiniu.bucket + ":" + key
  };
  let accessKey = config.qiniu.accessKey;
  let secretKey = config.qiniu.secretKey;

  let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
  let putPolicy = new qiniu.rs.PutPolicy(options);
  let uploadToken = putPolicy.uploadToken(mac);
  let cf = new qiniu.conf.Config({
    zone: qiniu.zone.Zone_z1
  });
  let formUploader = new qiniu.form_up.FormUploader(cf);
  const extname = path.extname(localFile);
  const mimeName = mime.getType(extname);
  const putExtra = new qiniu.form_up.PutExtra({ mimeType: mimeName });
  return new Promise((resolve, reject) => {
    formUploader.putFile(uploadToken, key, localFile, putExtra, function(
      respErr,
      respBody,
      respInfo
    ) {
      if (respErr) {
        reject(respErr);
      }
      if (respInfo.statusCode == 200) {
        console.log(`上传成功 key: ${key}`);
      } else {
        console.log(`上传失败!: `, respInfo, respBody);
      }
      resolve({ respBody, respInfo });
    });
  });
}
function getFileKey(pre, file) {
  if (file.indexOf(pre) > -1) {
    const key = file.split(pre)[1];
    return key.startsWith("/") ? key.substring(1) : key;
  }
  return file;
}

(async () => {
  console.time("上传文件到cdn");
  await uploadFileCDN(files);
  console.timeEnd("上传文件到cdn");
})();
