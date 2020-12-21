# Practical Test
> This is a hands-on practical test design to challenge participants on their debugging and problem-solving skills.

**As a wise man once said, a good developer is a better problem-solver.**

## Introduction
This is a simple landing-page website that has couple of problems in terms of application logic and server communication.
You task is to identify them and provide comprehensive solution.


## 1. Booting up
	1. Please clone the following repository inside `~/workspace/team9/`
	https://github.com/maminio/front-practical-test.git
	2. Create and checkout a branch with your first name and date id: 2020/12/25 => 20201225
	3. Start up the client buy running `yarn start`.
	5. The WebApp should be accessible from `http://team9.local`


## 2. Website health status
> We want to show the service health status in the main landing page. But apparently there's an issue.
> As you can see the Web-app is not able to connect to the back-end.

	1. Identify the problem and write your explanation.
	2. Provide solution and update the source code accordingly.
	3. We need to show an updated health-status in the main area
	    1. Fix the place of the health-status with your own design of choice.
	    2. The health status needs to be updated every 3seconds, otherwise we won't know the status. Update the `HealthCheck` component to fetch the `/health` api on an interval.


## 3. Form submission
Our back-end was designed by the most weirdest developer ever. The managed to write the most random way of building an api.
The behaviour is as follow:
1. We have multiple APIs for each of the form fields.
2. Every api call has a random behaviour. Almost every 6 calls results in a success.

Tasks:
1. Update form validation params to make all fields required.
2. Add appropriate message for each invalid fields.
3. User name must be valid in this regex:`/^[0-9a-zA-Z_.-]+$/`
4. Update the API calls to always have a successful form submission.


## Submission
	* Make sure your code has no lint errors
	* Make sure your code has no build or runtime error
	* Make sure you do not push any non-required files to the repository
	* Your source code must have comments and readable (Don’t overkill it tho!)

## Extra Challenges
	1. Dockerize the app
	2. Add Nginx webserver.





