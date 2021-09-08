<p align="center">
<img style="height:200px; width:200px" src="https://init-svg.herokuapp.com/svg/profile/icon/ff0000/animate"/>

  <h1 align="center">Profile-icon</h1>

  <p align="center">
    A simple tool to make user profile on your platforms much more dynamic!
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

Are you an independent developer who still uses a single boring image for default user profile images on your platform? </br>
Do you want to make user profiles on your platform much more interesting, without  writing any extra code or installing the load of a separate library? </br>
Then this tool might be the perfect solution for you. </br>

Here's why:
* It makes the user profiles on any platform much more intuitive.
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

| parameter  | description                                                                                  | example   |
| ---------  | -------------------------------------------------------------------------------------------- | --------- |
| `file`     | Identifies the file type. System currently supports only svg.                                | /svg      |
| `firstName`| first name of the user.                                                                      | /profile  |
| `lastName` | last name of the user.                                                                       | /icon     |
| `color`    | Hex value of the desired color.                                                              | /ff0000   |             
| `type`     | Desired style type for the icon. System currently supports three type. ANIMATE, FILL, STROKE.| /animate  |

## Usage Examples

If you already have a project and want to use this tool without installing it on your machine. It is available at: <br>
https://init-svg.herokuapp.com/svg/

```
  <img style="height:200px; width:200px" src="https://init-svg.herokuapp.com/svg/profile/icon/ff0000/animate"/>
```
OUTPUT:-

<img style="height:200px; width:200px" src="https://init-svg.herokuapp.com/svg/profile/icon/ff0000/animate"/>





