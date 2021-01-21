# quarkus-mailhog-sample project

## Running the application in dev mode

You can run your application in dev mode that enables live coding using:
```shell script
./mvnw compile quarkus:dev
```

## Running Mailhog in Docker container

Use Docker Compose to start the Mailhog server:
```shell script
cd ./docker/mailhog
docker-compose up
```

### View Mails

Use the Web UI bundeld with Maihog to view the emails in a browser:

http://localhost:8025

## Send email from the Quarkus application

In a web browser navigate to http://localhost:8080 and fill out the form to send a default Hello email message to the recipient.

The mail should appear in Mailhog.