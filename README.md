# prime-number


This is a simple Node.js Express API that checks if a given number is prime or not.

## Setup

1. Clone the repository:

git clone <your-repo-url>
cd <your-repo-folder>

2.Install dependencies:
npm install

3.Create a .env file in the root directory and set your PORT 
PORT=8080

4.Start the server:
npm run dev

5.You should see:
server listen on 8080

6.API Endpoint
URL: http://localhost:8080/api/v1/prime
Method: POST
postman body example
{
  "num": 7
}

7.Response
The API will return a JSON response indicating whether the number is prime or not.

Example:

{
  "responseData": "It is a prime number"
}

Or:

{
  "responseData": "It is not a prime number"
}
