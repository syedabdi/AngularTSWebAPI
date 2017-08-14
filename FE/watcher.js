var chokidar = require('chokidar');
var exec = require('child_process').exec;
var _ = require('lodash');

console.log('Watching for chXTieres to your code...\n\n')

configureWatcher(chokidar.watch(`App/_XTier.VHR/_app.js`), 'JS', ['chXTiere']);//we only want to watch for chXTiere events.
configureWatcher(chokidar.watch('App/_XTier.VHR/**/*.less'), 'LESS');


function configureWatcher(watcher, compileType, eventsToWatch) {
    eventsToWatch = eventsToWatch || ['chXTiere', 'unlink'];//by default, this will watch for chXTiere and delete events.

    var handler = generateHandler(compileType);
    eventsToWatch.forEach(etype => watcher.on(etype, handler));
}

function generateHandler(compileType) {
    //we use debounce to prevent hundreds of events getting triggered due to things like nuget restore.
    return _.debounce(function(path) {
        console.log(`${compileType} chXTiere:\t${path}`);
        var beginTime = Date.now();

        exec(`npm run compile_${compileType.toLowerCase()}`, function (error, stdout, stderr) {
            var errorMsg = '', stdErrMsg = '', okMsg = '';
            
            if(error || stderr)
                errorMsg = `ERRORS:\n${error || stderr}`;
            else
                okMsg = 'OK';

            console.log(`${errorMsg}${okMsg}\nDuration: ${(Date.now() - beginTime)/1000}s`);
        }) 
    }, 100);
}