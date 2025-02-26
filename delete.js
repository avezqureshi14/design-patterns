const fs = require('fs');
const path = require('path');

function deleteJSFiles(dir, excludeFile) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            deleteJSFiles(fullPath, excludeFile);
        } else if (file.endsWith('.js') && fullPath !== excludeFile) {
            fs.unlinkSync(fullPath);
            console.log(`Deleted: ${fullPath}`);
        }
    });
}

const scriptPath = __filename;
deleteJSFiles(process.cwd(), scriptPath);
console.log("Deletion complete.");
