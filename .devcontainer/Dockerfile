# Using the latest and greatest Alpine Linux
FROM alpine:edge

# Updating Alsine Package Keeper
RUN apk update

# Installing Git
RUN apk add --update --no-cache git

# Installing Node 18.15.0 and NPM
RUN apk add --update --no-cache nodejs=18.15.0-r0 npm

# Installing Turborepo
RUN npm install turbo --global