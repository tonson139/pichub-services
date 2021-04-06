/**
 * @description         - save file(s) form req.files which created multer.any()
 * @param {object[]}    - array of {<fieldname>, <mimetype>, <buffer>, ... }
 * @param {string[]}    - fieldnames [fieldname1, fieldname2, ...]
 * @param {string[]}    - filenames [filename1, fielename2, ...]
 * @param {string}      - directory to save file(s)
 * @returns {Array}     - [ { fieldname, filename }]
 */

const { writeFileSync } = require('fs');
const path = require('path');

const saveFiles = (bufferfiles, fieldnames, filenames, saveDirectory) => {
    return new Promise( (resolve, reject) => {
        if(fieldnames.length === filenames.length){
            let writeResult = []; 
            bufferfiles.forEach( buffer => {
                fieldname = buffer.fieldname;
                if(fieldnames.includes(fieldname)){
                    filetype = buffer.mimetype.split('/')[1];
                    filename = filenames[fieldnames.indexOf(fieldname)];
                    data = buffer.buffer;
                    writeFileSync(path.join(saveDirectory,`${filename}.${filetype}`), data);
                    writeResult.push({ fieldname, filename });
                }
            })
            resolve(writeResult);
        } else {
            console.error('length of "fieldnames" and "filenames" must be equal');
            reject(false);
        } 
    });
}

module.exports = saveFiles;