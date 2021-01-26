FROM maven:3.6-jdk-11 as builder
WORKDIR /app
COPY . .
RUN mvn clean package

FROM tomcat:9

COPY --from=builder /app/target/server-api-asq-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps/ROOT.war
