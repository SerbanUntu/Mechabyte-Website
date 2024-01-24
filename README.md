# Getting started
1. To contribute to the website, you first need to install `git` and to make a `GitHub` account.
Instructions for installing `git` can be found [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
To check that you successfully installed git, open a terminal (on Windows, you can search `cmd` in the search bar) and type this command: 
```
git --version
``` 
After pressing enter, the current version of git installed on your machine should be displayed.

2. Clone the repository (project files) using this command at the desired location on your machine:
```
git clone https://github.com/SerbanUntu/Mechabyte-Website.git
```

3. Navigate to `/src/App.vue`, the App component, which contains most of the code for this website. This project uses the `Vue` framework instead of plain HTML/CSS/JS. The HTML part can be found inside the `<template>` tag. The text displayed on the website
should be enclosed by `<p>` tags. You can change it as you wish.

4. To test the changes locally, you will need to install the `npm` package manager. On windows, you will also need to install `nvm-windows`. All of the instructions can be found [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). After checking the installations, run the following command from the terminal in the root of the project:
```
npm install
```
A progress bar should appear. After this, run this command and open the link that contains `localhost`:
```
npm run dev
```

5. To commit your changes, type the following commands:
```
git add .
git commit -m "your commit message"
git push -u origin dev
```
The first command stages the changes you made, the second command creates the commit and the third uploads the commit to GitHub. I recommend reading [this](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/) post before writing a commit message.

![Banner](/public/banner.png)