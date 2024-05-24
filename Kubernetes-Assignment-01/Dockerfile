# Use an official MySQL image as a parent image
FROM mysql:latest

# Set the working directory in the container
WORKDIR /usr/src/configs

# Copy the MySQL configuration file into the container
#COPY my.cnf /etc/mysql/my.cnf

# Expose port 3306 to be accessible from outside the container
EXPOSE 3306

# Start MySQL using the custom configuration
CMD ["mysqld"]
