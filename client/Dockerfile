# multi container deployment
# First phase
# installing the node container as setting a name for it
FROM node:alpine as builder

#setting up the working directory
WORKDIR '/app'

#copying the package.json file only from the root folder
#avoiding to copy the node_modules files
COPY ./package.json ./

#installing the packages 
RUN npm install

#Copying the rest of the files from root folder to the dest root folder too
COPY . .

#running the build process
RUN npm run build

# Second phase
# installing the nginx container 
FROM nginx

#exposing  port in production
EXPOSE 3000

#copying the default configuration file
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf


#copying the build folder created in the first phase
#the destination folder is found in the nginx documentation
COPY --from=builder /app/build /usr/share/nginx/html

