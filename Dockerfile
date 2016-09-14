FROM ubuntu:14.04

# Set maintainers.
MAINTAINER Daniel Kokott <dako@berlingskemedia.dk>

# Update and install required packages.
RUN apt-get update -y
RUN apt-get install -y wget

ENV NODE_VERSION v4.2.2

# Download and install node.js.
RUN wget -O - http://nodejs.org/dist/$NODE_VERSION/node-$NODE_VERSION-linux-x64.tar.gz \
    | tar xzf - --strip-components=1 --exclude="README.md" --exclude="LICENSE" \
    --exclude="ChangeLog" -C "/usr/local"

# Mount current dir as a volume containing all source code.
WORKDIR /nyhedsbreveprofiladmin

COPY ./src /nyhedsbreveprofiladmin/src
COPY ./bower_components /nyhedsbreveprofiladmin/bower_components
COPY ./node_modules /nyhedsbreveprofiladmin/node_modules
COPY ./server /nyhedsbreveprofiladmin/server

EXPOSE 8000

ENTRYPOINT ["node"]
CMD ["server/server.js"]
