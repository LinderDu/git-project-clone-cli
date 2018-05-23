const co = require('co');
const prompt = require('co-prompt');
const chalk = require('chalk');
const path = require('path');
const exec = require('child_process').exec;
const fs = require('fs');

const ProjectTplGitPath = "https://github.com/duduhl/react-create-cli.git";

module.exports = () => {
	co(function *() {
		let ProjectName = yield prompt('请输入项目名称');
		let Branch = yield prompt('请输入初始化项目模板分支：');

		console.log(chalk.white('project init start'));

		const gitCmdStr = `git clone ${ProjectTplGitPath} ${ProjectName} && cd ${ProjectName} && git checkout ${Branch} && rm -rf .git`;
		console.log(gitCmdStr);

		exec(gitCmdStr, (error, stdout, stderr) => {
			if(error){
				console.log(chalk.red(error));
				process.exit();
			}

			console.log(chalk.cyan('√ 项目初始化完成！！！'));
			console.log(chalk.yellow(`请执行 cd ${ProjectName} && npm ii`));
		})
	})
}