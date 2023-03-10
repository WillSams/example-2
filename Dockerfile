FROM node:18-alpine
WORKDIR /app
COPY . .
EXPOSE 3002
CMD [ "node", "app.js" ]
