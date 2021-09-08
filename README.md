<p align="center">
<img style="height:200px; width:200px" src="https://init-svg.herokuapp.com/svg/profile/icon/ff0000/animate"/>

  <h1 align="center">Profile-icon</h1>

  <p align="center">
    A simple tool to make your platforms user profiles much more dynamic!
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a>
    <ul>
        <li><a href="#Usage-Examples">Usage Examples</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

Have you ever tried making an app or a website that has a number of user profiles and for every user profile image you have to set the same default icon.</br>
With the help of this tool you can create real time dynamic icons to make your profiles much more interesting.

Here's why:
* Makes the user profiles on any platform much more intuitive.
* Doesn't require any extra dependency neither adds extra load on the platform
* Has easy to follow steps to get desired output and can be used in a simple img tag by adding the link in src.

### Built With

A list of technologies used in the project.
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may set up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

To run this project locally [Node.js](https://nodejs.org/en/) must be installed on your machine.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Nidhish-Mehra/profile-icon
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start server
   ```sh
   node app
   ```
4. Open browser
   ```sh
   http://localhost:5000/svg/firstname/lastname/hexColor/type
   ```
   
<!-- USAGE EXAMPLES -->
## Usage

After successfully installing and running the project locally you can go to your local host port 5000. <br>
 <h3> By default the URL accepts three parameters </h3>
 
1. /svg. The type of the file. (Currently the system only supports .svg format)
2. /firstName. The first name of the user.
3. /lastName. Last name of the user.

<h3> In addition the URL accepts two more parameters. </h3>

1. /color. Color input is given as a hex code without '#' 
2. /type. Type param specifies what type of style do you want on your icon. Currently system supports three types:
  - ANIMATE (loops an animation)
  - STROKE (Text appears with only stroke)
  - FILL (Text fills with static color provided)

## Usage Examples

If you already have a project and want to use this tool without installing it on your machine. It is available at: <br>
https://init-svg.herokuapp.com/svg/

```
  <img style="height:200px; width:200px" src="https://init-svg.herokuapp.com/svg/profile/icon/ff0000/animate"/>
```
OUTPUT:-

<img style="height:200px; width:200px" src="https://init-svg.herokuapp.com/svg/profile/icon/ff0000/animate"/>





