# GitHub Username Finder Pro: Automated Search

## Description:
Created an original script to find the shortest available GitHub username. The script checks if a username is available. It automatically ran over 500,000 parameters, including all 2-char alphanumeric, 3-letter, and 4-letter combinations. Successfully secured the lowest available username - ‘aahx’.

...
This project is a GitHub username finder script that utilizes a github Web Service Endpoint to check the availability of usernames. It generates a list of potential usernames based on a given pattern and then checks each username's availability on GitHub. The available usernames are stored in an array for further analysis or processing.

## Demo
https://github.com/aahx/GitHub-Username-Finder-Pro-Automated-Requests/assets/105463926/5a748eb1-8ee4-433b-b130-527cd09132b9

## How to Use
To clone this repository and run the script on your own system, follow these steps:

1. Make sure you have Node.js installed on your machine.
2. Clone this repository to your local machine using the following command:
``` 
git clone https://github.com/your-username/github-username-finder.git 
```
3. Navigate to the cloned repository's directory:
```
cd github-username-finder
```
4. Open the index.js file in a text editor and locate the following lines:
```
let cookie = "INSERT YOUR COOKIE HERE"
let authToken = "INSERT YOUR AUTHENTICATION TOKEN HERE"
```
5. Replace '<strong>"INSERT YOUR COOKIE HERE"</strong>' with your GitHub cookie. (Refer to the "How to Retrieve Your GitHub Cookie and Authentication Token" section below for instructions on obtaining the cookie.)
6. Replace '<strong>"INSERT YOUR AUTHENTICATION TOKEN HERE"</strong>' with your GitHub authentication token. (Refer to the "How to Retrieve Your GitHub Cookie and Authentication Token" section below for instructions on generating the token.)
7. Save the changes to the '<strong>index.js</strong>' file.
8. Open a terminal or command prompt and install the required dependencies by running the following command:
```
npm install
```
9. After the installation is complete, run the script using the following command:
```
node index.js
```
10. The script will start generating usernames based on the provided pattern and check their availability on GitHub. The available usernames will be displayed in the console output.

<strong>Note:</strong> The script includes a delay of 0.7 seconds between each request to prevent exceeding the secondary rate limit. You can adjust this delay in the '<strong>loopThruValues</strong>' function if needed.

## How to Retrieve Your GitHub Cookie and Authorization
To retrieve your GitHub cookie, you can follow these steps:

1. Open your web browser and navigate to GitHub.
2. Log in to your GitHub account.
3. Go to your Settings > Account > Change Username > "I understand, let's change my username". 
4. Right-click anywhere on the page and select "Inspect" or "Inspect 
5. Element" to open the browser's developer tools.
6. In the developer tools panel, locate and click on the "Network" tab.
7. Type charactesr into "Enter a new username" in your GitHub Page.
8. In the network requests list, click on "rename_check?..."
9. In this section, scroll down and locate the "Request Headers" section.
10. Look for the "Cookie" header and copy its value.
11. Click on "Paylod" tab, located next to "Headers"
12. Look for "autheniticity_token" under Form Data and copy its value.

# Disclaimer
This script is intended for educational and personal use only. Use it responsibly and in compliance with GitHub's terms of service. The script may make a large number of requests to the GitHub Web Service URL, so be mindful of rate limits and avoid any activities that may violate GitHub's policies.

Please note that the availability of usernames can change over time, and this script may not guarantee the accuracy of the results.


#### Tech used:
Node.js, JavaScript, Headers, FormData, fetch, Regular Expressions, Promises, setTimeout, Async/Await, Postman
