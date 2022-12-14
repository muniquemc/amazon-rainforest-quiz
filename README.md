# Amazon Rainforest Quiz

Based on the ideas from the Javascript project module, I have created a quiz as part of the Code Institute's Diploma in Software Development Course. It is a quiz about the Amazon Rainforest, a vast forest where most of that is situated in Brazil, where I was born and raised.

For link to this website click [Here](https://muniquemc.github.io/amazon-rainforest-quiz/).

The design was created for *Desktop, Laptop, Tablet first* and *Responsive* but also works on mobile phones as shown below:

![MyImage](/assets/images/am-i-responsive-quiz.png)

## Who is this quiz for?

This quiz contains questions about the Amazon Rainforest, which give players some knowledge about carbon emissions, area, species and other interesting facts about the Amazon Rainforest.

## What does this quiz do?

The quiz contains exciting questions and facts about the Amazon Rainforest. All the colors and design where thought in order to relate to natural environment. When the question is write, the option truns green and when wrong turns orange. The players can also track their performance by looking at the scores and feedback on the top right side.

## UX summary

My goals in building this simple and intuitive page where:

* Create fun interactive quiz for those interested in the Rainforest facts
* To make the quiz playable through use 5 questions
* Design the quiz aesthetically pleasing with simple and clear way
* To make the quiz responsive.

To achieve the goals above, I used JavaScript, HTML and CSS.

### Features for future implementation

* The number of questions can be increased, and I can also implement the functionality of showing the rigth answer when the player doesn't get the correct one at first.
* Create sets of questions with increasing levels of difficulty. After this development, the game will be more exciting and variable for players.
* Create a feature where the players could save the results for comparing to other players.

## Technologies

- HTML5 for basic structure of the website
- CSS3 for style the website
- Google Fonts for font family
- Git for version control
- GitHub for storage the files and steps of development of the website

## Functionality

### Intro Page

![My Image](/assets/images/intro-page-quiz.png)

In the first page, the players will see a message inviting them to test their knowledge with an image related to one of the Amazon Rainforest's most famous animal: Arara. 

### Quiz Pages

![My Image](/assets/images/quiz-pages.png)

The quiz pages bring the player to the game by showing the options in boxes where they can choose the correct one. They can also see their scores on the top right side of the page and the questions they are in on the top left side.

### Questions and Answers

When the users choose a correct answer, they can see a change in the background color for green:

![My Image](/assets/images/correct-answer.png)

If they choose an incorrect answer the background and the button color will be orange:

![My Image](/assets/images/incorrect-answer.png)


### Last Page

When the players have passed through all the questions, they will reach the last page where they are invited to play again.

![My Image](/assets/images/final-page.png)

## Resources

- Code Institute course materials
- Code Institute Slack Community for some helps and ideas
- Code Institute Mentor meetings and support
- Am I Responsive for a responsive image in README
- Tips and tutorials from the Brian Design channel on Youtube [Youtube](https://www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A)
- [Canva](https://www.canva.com) for images used.

## Testing

### Browser testing

Website was tested in Google Chrome, Opera, Microsoft Edge and Safari. On each browser this website works properly (functionality, visuality).

It was tested on  Macbook Pro, Apple iPhone 13 Pro and Samsung A6 and the website worked on these type of devices.

### Validators

The HTML was checked by W3C HTML validator and it did not reported any issues.
You can see the result below:

![My Image](/assets/images/validator-html.png)

The CSS was checked by W3C Jigsaw validator it did not reported any issues.

![My Image](/assets/images/css-validator.png)

The JS was checked via JSHint According to the assessment some functions are available in ES6 version. It was the reason that I got some warnings in the assessment.

![My Image](/assets/images/JSHint.png)

### Local testing

The buttons of the website were tested locally and these worked properly.

## Version control

I used two repositories during the development: GitPod for local repository and GitHub for remote or background repository. 

I managed the versions with the following process:
- I created a repository in GitHub
- I opened and developped the repository in GitPod
- I created and developped the files and folders in GitPod
- I used commit messages to help the development with short notices
- I saved and pushed my works to GitHub repository:
    1. git add . - adding work to git
    2. git commit -m "Commit message" - to commit the stage of work
    3. git push - to update my work in GitHub

## Publish the quiz

The steps of the publishing on the GitHub were as follow:
    
    1. **"Settings"** on the repository
    2. **"Source"** of "GitHub Pages" selected *master for Branch* and saved it
    3. The website was published on GitHub Pages and the link was provided in the same section.
