// clean-js-files.js
const fs = require('fs');
const path = require('path');

const rootDir = __dirname; // Root directory of the script file
const scriptFileName = path.basename(__filename); // Name of this script file

// Function to recursively delete all .js files except this script
function deleteJsFilesExceptScript(dir) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.error(`Error reading directory ${dir}:`, err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(dir, file);

            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error(`Error getting stats of file ${filePath}:`, err);
                    return;
                }

                if (stats.isDirectory()) {
                    // Recursively go into the directory
                    deleteJsFilesExceptScript(filePath);
                } else if (stats.isFile() && path.extname(file) === '.js' && file !== scriptFileName) {
                    // Delete .js files except the script itself
                    fs.unlink(filePath, err => {
                        if (err) {
                            console.error(`Error deleting file ${filePath}:`, err);
                        } else {
                            console.log(`Deleted file: ${filePath}`);
                        }
                    });
                }
            });
        });
    });
}

// Start the deletion process from the root directory
deleteJsFilesExceptScript(rootDir);
