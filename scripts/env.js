const { exec } = require('child_process')
const fs = require('fs');

const file = './.env';

try {
    const envstr = fs.readFileSync(file, 'utf8');

    const lines = envstr.split('\n')
    const newlines = lines.map(line => {
        line = line.trim()
        const key = line.split('=')[0]?.trim()
        const value = process.env?.[key]
        if (value) {
            return `${key}=${value}`
        }
        return line
    })
    fs.writeFileSync(file, newlines.join('\n'), 'utf8')
}
catch (err) {
    console.warn('something went wrong while prepare env', err)
}