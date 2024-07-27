# How to use this app
## To run a Dockerized React app using Vite after cloning the repository into your local machine, you'll generally follow these steps:

### 1. Clone the Repository:

```
git clone https://github.com/Satyam031199/react-firebase-docker.git
cd react-firebase-docker
```
### 2. Build the Docker Image:
Make sure you have Docker installed and running on your local machine. Then, build the Docker image from the Dockerfile provided in the repository:

```
docker build -t react-firebase-docker .
```
### 3. Run the Docker Container:
Once the image is built, run a container from the image:

```
docker run -p 3000:3000 react-firebase-image
```
This command maps port 3000 of the container to port 3000 on your local machine. If your Dockerfile exposes a different port, adjust the command accordingly.

### 4. Access the Application:
Open your web browser and navigate to http://localhost:3000. You should see your React app running.
