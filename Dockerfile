FROM node:14.19.1-slim
WORKDIR /app
COPY . .
CMD [ "npm", "run" , "start"]
EXPOSE 3000