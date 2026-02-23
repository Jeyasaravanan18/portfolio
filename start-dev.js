const { spawn } = require('child_process');
const path = require('path');

const server = spawn('npm', ['start'], { cwd: path.join(__dirname, 'server'), shell: true, stdio: 'inherit' });
const client = spawn('npm', ['run', 'dev'], { cwd: path.join(__dirname, 'client'), shell: true, stdio: 'inherit' });

const cleanup = () => {
    server.kill();
    client.kill();
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
