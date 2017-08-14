var fs = require('fs-extra-promise');
var path = require('path');
var bluebird = require('bluebird');
var execAsync = bluebird.promisify(require('child_process').exec)
var globAsync = bluebird.promisify(require('glob'));//promisified glob.

//====BEGIN FILENAME MANIPULATION
const removeTrailingSlash = s =>
    s.endsWith('/') || s.endsWith('\\') 
        ? s.substring(0, s.length - 1) : s;

const slashes = s => removeTrailingSlash(s.replace(/\//g, '\\'));

const forCmd = (s, cwd) => removeTrailingSlash(slashes(path.join(cwd, s.replace(/\*/g, ''))));
function toRelativePath(currentLocation, paths) {
    paths.map(p => path.join(currentLocation, p));
}
//=====END FILENAME MANIPULATION=======

//=====BEGIN XML MANIPULATION=======
function determineReferenceType(f) {
    if(f.endsWith(".ts"))
        return 'TypeScriptCompile'
    else if(f.endsWith('/'))
        return 'Folder'
    else
        return 'Content'
}
const toReference = f => `<${determineReferenceType(f)} Include="${slashes(f)}" />`

function clearReferences(csproj, references) {
    return references.reduce((currentCsproj, reference) => currentCsproj.replace(reference, ''), csproj)
}
function addReferences(csproj, references) {
    return csproj.replace('<ItemGroup>', '<ItemGroup>\n' + references.map(ref => '\t\t' + ref + '\n').join(''))
        .replace(/^\s*[\r\n]/gm, '');
}

//=====END XML MANIPULATION=======


//====BEGIN I/O=======
function getCsProjFileName(currentLocation) {
    return globAsync(path.join(currentLocation, '*.csproj'))
            .then(matchedFiles => matchedFiles[0]);
}

function getCsProj(currentLocation) {
    return getCsProjFileName(currentLocation)
        .then(fileName => fs.readFileAsync(fileName, 'utf8'));
}

function writeToCsProj(csprojFile, csprojContents) {
    return fs.writeFileAsync(csprojFile, csprojContents, 'utf8');
}

//Inspects a directory, and determines which <Content /> entries in the csproj belong to this directory.
function getReferences(dir) {
    return globAsync(dir, { mark: true })
        .then(files => files.map(toReference))
}
function getExistingReferences(csproj, dir) {
    return getReferences(dir)
        .then(files => 
            files.filter(f => csproj.indexOf(f) > -1));
}

function copyFiles(src, dest, currentLocation) {
    return execAsync(`robocopy ${forCmd(src, currentLocation)} ${forCmd(dest, currentLocation)} /e`)
        .catch(() => true)//this will always throw an error for some reason?
}

function updateCsproj(src, dest, projectDir, csprojFileName, originalCsprojContents, originalReferences) {
    return execAsync(`rmdir  ${forCmd(dest, projectDir)} /s /q`)
        .catch(() => true)
        .then(() => copyFiles(src, dest, projectDir))
        .then(() => globAsync(dest, { mark: true}))
        .then(srcFiles => srcFiles.map(toReference))
        .then(newReferences => {
            var newCsprojContents = addReferences(clearReferences(originalCsprojContents, originalReferences), newReferences);

            if(newCsprojContents !== originalCsprojContents)//if we made chXTieres to the csproj, let's write the chXTieres.
                return writeToCsProj(csprojFileName, newCsprojContents);
            else
                console.log('No updates to csproj.');
        })
        .then(() => console.log('Done updating project references.'))
        .catch(e => console.log(e))
}

//=====END I/O=======

(function main () {

    if(process.argv.length < 3)
        console.log('Usage: project_reference.js <source> <dest>')
    else {
        var projectDir = __dirname;
        var src = process.argv[2], dest = process.argv[3];

        getCsProj(projectDir)
            .then(csproj => Promise.all([
                csproj,
                getExistingReferences(csproj, dest),
                getCsProjFileName(projectDir)
            ]))
            .then(data => updateCsproj(src, dest, projectDir, data[2], data[0], data[1]))
    }
})();