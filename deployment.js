const execSync = require('child_process').execSync;
const fs = require('fs-extra');
console.log("please first check the values in .env.production cuz web will be deployed with those values")
console.log("removing ./dist folder")
if (fs.existsSync("./build")) {
    fs.removeSync('./build');
}

const bucket = process.argv[2]
const distro = process.argv[3]
const buildStage = process.argv[4]


console.log("generating build")
execSync(`npm run build ${buildStage}`, {encoding: 'utf-8'});
console.log("uploading values to s3")
execSync(`aws s3 sync ./build ${bucket} --delete`, {encoding: 'utf-8'});
console.log("invalidating cloudfront cache")
execSync(`aws cloudfront create-invalidation --distribution-id ${distro} --paths "/*"`, {encoding: 'utf-8'});
console.log("deployment finish invalidation could take some minutes to be reflected in real front ")

