🚀 Webhook API with JS 📡
Welcome to the Webhook API project! This project is built with Node.js, Express, and Swagger. It serves as a robust webhook receiver and documentation platform, and it can be seamlessly deployed using Docker. 🎯
📝 Project Files
index.js: Main application file.
package.json & package-lock.json: Project dependencies.
Dockerfile: Configuration for Docker deployment.
.gitignore: Specifies files and directories to ignore.
README.md: Project documentation
🔍 Running Locally
1. Clone the Repository
Clone this project to your local machine:
git clone https://github.com/AlexandraN2001/WEBHOOK.git
2. Install Dependencies
npm install
3. Start the Server
Start the local server on port 3000:
npm start
🐳 Using Docker
Deploy your application using Docker in just a few steps:
1. Build the Docker Image
   docker build -t webhook-api .
2. Run the Container
docker run -p 3000:3000 webhook-api
🎯 Deploying to Docker Hub
Push your Docker image to Docker Hub:
docker tag webhook-api alenac07/webhook-api:latest
docker push alenac07/webhook-api:latest
Visit your Docker Hub page:
👉 https://hub.docker.com/repository/docker/alenac07/webhook-api/general
📜 API Documentation with Swagger
Endpoint: /webhook
Method: POST
Request Body:
{
  "message": "Hello from JS, made by Alexandra"
}
Response:
{
  "status": 200,
  "message": "Webhook processed successfully - Hello from JS, made by Alexandra"
}




