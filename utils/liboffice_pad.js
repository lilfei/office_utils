const libre = require('libreoffice-convert');
const path = require('path');
const fs = require('fs');

async function ConvertDocToPdf() {
    try {
        const inputPath = path.join(__dirname, "test.docx");
        const outputPath = path.join(__dirname, `/test.pdf`);
        let docData = await fs.readFile(inputPath)
        return new Promise((resolve, reject) => {
            libre.convert(docData, '.pdf', undefined, (err, done) => {
                if (err) {
                    reject('Convertion Failed')
                }
                fs.writeFileSync(outputPath, done);
                resolve("Convertion successfull")

            });
        })
    } catch (err) {
        console.log("Error in input reading", err);
    }
}