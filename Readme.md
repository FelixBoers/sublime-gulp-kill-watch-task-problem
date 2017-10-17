# Killing watch task not working on Windows 10

## System

| Component | Version |
|---|---|
| OS | Windows 10 x64 |
| NodeJS | v8.5.0 |
| Gulp | 3.9.1 |
| Sublime Text 3 | Build 3150 | 

## Steps to reproduce
1. Clone repository `git clone https://github.com/flex87/sublime-gulp-kill-watch-task-problem.git`
2. Restore packages: `npm install`
3. Open sublime project and press `Ctrl+Shift+P` to run the `Gulp` command. Then select the `default` task and press `Enter`.
4. Modify `watch.js` and save.
	Now you should see a message like this in the `Gulp Output`: 
	```
	Running 'default'...
	[14:32:14] Using gulpfile ~\Desktop\Gulp Watch Problem\gulpfile.js
	[14:32:14] Starting 'default'...
	[14:32:14] Finished 'default' after 12 ms
	file C:\Users\boers\Desktop\Gulp Watch Problem\watch.js was changed
	```
5. Press `Ctrl+Shift+P` to run the `Gulp: Kill all running tasks` command.
6. Modify `watch.js` again and save.
	`node.exe` is still running and events still keeps getting fired.