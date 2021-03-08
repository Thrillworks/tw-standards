---
title: 'Teamwork'
dateUpdated: '27-02-2021'
summary: 'About using git, continuous integration, and how we work together'
tags: ['git', 'jira', 'commit', 'stage', 'commit messages']
chapter: '2'
---
# 2. Teamwork
1. ## General Principles
	1. ###  Keep the Code Base Deployable.
		Do your absolute best to keep our shared codebase in a deployable state. In particular, the code in `master` should always be deployable to production.
	2. ### Maintain Good Public History.
		Collective work should proceed in such a way that it would be easy to know who did what modifications, when, and why.
	3. ### Keep Things Reversible.
		Since mistakes are inevitable, we want to make sure that it is easy to undo any specific change or to go back to the point where things were working.
	4. ### Allow For Selective Integration.
		When a bug is fixed or a feature is added, we want to have the flexibility to merge that feature into master or another branch as needed. Do your best to avoid situations where a set of changes cannot be applied because it has been bundled together with other unrelated changes.
2. ## Basic Git
	1. ### Use Useful Tools.
		A number of tools allow you to do Git operations faster and to stay on top of things. Some specific tools worth using:
		- GitX works great for reviewing your changes before staging them.
		- When working with Github, hub provides a lot of useful shortcuts.
		- When using VSCode, there are multiple Git plugins that make it easy to see which parts of the current file have been modified and who last changed a line of code. 
		- The zsh and fish shells can both be configured to show the name of the Git branch you are in and whether this branch is currently clean.
	2. ### Understand Git's Model.
		A lot of Git commands make a lot more sense once you understand the underlying model. The main things to understand are the “three states” of Git (history vs. staging area vs. working directory) and the fact that branches are just named references to Git commits. Look at this [Stack Overflow answer] for a quick summary.
	3. ### Always Work on Your Private Feature Branch.
		Never do any work directly on a shared branch, especially on master. Always branch before making any changes. Working on a feature branch offers numerous advantages. The most basic one is that since you should never push to shared branches, such as master (see below), you will save yourself a lot of headaches by not making commits to such branches in the first place. Additionally, working on a branch will make it easy for you to put your work aside when you need to switch to fixing an unrelated bug. An important corollary to this is that if you are working on a bug or a feature and suddenly spot an unrelated bug that you have an immediate urge to fix, then the right thing to do is to make a separate branch off your upstream branch, fix it there, then return to your current feature branch.
	4. ### Work on Your Own Fork.
		When using Github or Bitbucket, fork the project repository and create your branches on your own fork. Among other things, this helps in avoiding accidental pushes to master of the shared repo.
	5. ### Give Your Branches Sensible Names.
		Good branch names should be short, but descriptive and meaningful. They should be prefixed with “feat”, “fix”, and “chore” for features, bug fixes and chores, respectively. If using Jira, always include the Jira ticket number to tie the code together with the ticket directly!!
	6. ### Commit Often.
		Make frequent commits in the course of doing your work. This makes it easy to go back. It’s ok to commit half-done work, since you will squash those commits later. But do squash (or amend) those commits before submitting a pull request (more on this below).
	7. ### Stage Selectively.
		Review your changes closely before staging them. Stage reviewed changes one chunk at a time. Avoid staging the whole file at once (unless you are really, really confident you know all the changes you made to the file) and never stage multiple files at once. If you stage files indiscriminately, it is hard to ensure compliance with other guidelines. If you stage a file with git add <filename>, you don’t necessarily know what changes you are including. Instead, stage changes chunk by chunk, after reviewing each one individually. Never add multiple files at once (e.g., with git add .). Some GUI tools, such as SourceTree, make it a lot easier reviewing your changes and staging them chunk by chunk.
	8. ### Do Not Commit Things That Should Be Kept Confidential.
		When you commit a file, its content becomes part of the project’s history and will be visible to any person who will have access to the repository later. For this reason, do not commit credentials, personal information, and other things that ought to be kept confidential. You do not necessarily know who will have access to the repository in the future. This repository may be private today, but might become open source tomorrow. To avoid committing such files unintentionally, create a folder called “private” and include it your `.gitignore` file. This way, files added to this folder won’t show up in `$ git clean`, `$ git diff` or be suggested for inclusion by tools such as SourceTree.
	9. ### Avoid Committing Generated Artifacts.
		Artifacts that can be automatically generated from your code should generally be kept out of the repository. There are some exceptions to this rule. For example, we may need to commit minified code for packages that are distributed via Bower. As a general rule however, automatically generated content is better kept out of the repository to avoid spurious deltas.
	10. ###  Update and Rebase Often.
		Keep your branches up to date with upstream changes and rebase onto them often. You’ll need to do this before you submit a PR and it’s often easier to do this sooner rather than later.
	11. ### Use Pull Requests to Integrate Into Upstream Branch.
		Only use `$ git push` to push your private branch to the server. Further merging into master (or other shared branches) should be done using a pull request and in accordance with pull request best practices, as described in the next section.
	12. ###  Do Not Rewrite Public History.
		Do not rewrite the history of commits if another developer might be basing their work on this history. This certainly includes not rewriting master, but can also include other branches that you are sharing with others. Rewriting public history makes it hard to merge changes done by other people who have made branches that assume that history. Please note that rewriting history on master should normally not even be an option, since you really should not be pushing code to master in the first place. However, in the (very rare) cases when you do have to push to master, you should at least avoid rewriting its history.
3. ## Pull Requests
	1. ### Keep Master Deployable.
		Keep master branch at production quality at any given time. In other words, code needs to go through thorough testing before it is merged to master. Once it’s in master, it should be ready to go into production. Among other benefits, this will ensure that a new developer who branches off master will be starting with a high-quality codebase. This is a special case of the more general principle and is a driving factor behind many of the other guidelines.
	2. ### Do All of Your Work on a Branch In a Forked Repo and Merge Via Pull Requests.
		Never commit to master directly, even if you have permissions to do so. Instead, create a branch on your own fork of the repo, work on that branch, push the branch, submit a pull request. Do that even if you will end up merging that pull request yourself without anyone reviewing it (though, that’s a practice to be avoided).
	3. ### Rebase Before Submitting a Pull Request.
		Rebase onto master of the source repo before submitting a pull request. This is to ensure that your changes will be added cleanly to the end of the history.
	4. ### Squash Commits Before Submitting a Pull Request.
		It is natural that in the course of fixing a bug you would make a number of commits that gradually approach the final solution. Your fellow developers do not need to see those details. Squash those commits while rebasing.
	5. ### Allow For Cherry-Picking.
		An important limitation on the “squash your commits” rule is allowing upstream to cherry-pick. If it’s plausible that someone would want to merge some of your changes and not others, then it is worth leaving those changes as distinct commits. Of course, if you find yourself splitting your changes into several distinct commits, you should probably consider submitting several different pull requests.
	6. ### Ensure Good Commit Messages.
		The commits that are included in your PRs should have proper commit messages. Review your messages before submitting the PR and fix by either “amending” them or via “rebase”. A good commit message should start with a one line summary of the change, expressed in the imperative, e.g.: “Add support for foo in bar.quux()”. This one line summary should be limited to 50 characters. The message would then further describe the changes made by the commit in more detail, often in a few paragraphs. Further lines should be wrapped at 72 characters. Here is more information on commit messages: [https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html]
	7. ### Annotate All Commit Messages With Jira Story IDs.
		Branch names should include the Jira story ID. Commits that relate to a story without fixing it should include a Jira story number like so: [#12345678]. Commits that deliver a story should say [Fixes #12345678]. Note that normally all work that you do should relate to stories in Jira. If it’s important enough for you to work on it, it is probably important enough to have a story in Jira.
	8. ### Make Pull Requests Small and Focused.
		Each pull request should serve a distinct purpose, such as implementing a feature or fixing a bug. This enables easy rollback to a previous version in case of emergency. Split a pull request into two if it makes changes to two unrelated aspects of the codebase. Avoid large pull requests that make changes to more than 20 files. Chances are they can be split into smaller ones.
	9. ###  Make Sure All Tests Pass Locally Before Creating a Pull Request.
		Your pull requests should be validated by CI (see below), but you should avoid abusing CI by submitting pull requests that are likely to fail tests in CI, since doing so wastes other people’s times, as well as our CI resources. Make sure all tests pass locally before committing to a branch that triggers a CI build. Passing tests in this case means unit tests, integration tests, eslint, prettify, etc.
	10. ### Have a CI Service Test Your PRs.
		Each pull request should be automatically tested and built by a CI service, which should annotate the pull request with the results of the tests. No pull requests should be merged until they’ve been validated by CI.
	11. ###  Have at Least One Other Developer Review Your Code.
		Everyone’s code benefits from a second pair of eyes. With few exceptions, PRs should be reviewed by someone other than the original author before they are merged. In most cases the reviewer should wait until after the CI results before reviewing the code. In either case, PRs should only be merged after both CI and peer reviewer approval.