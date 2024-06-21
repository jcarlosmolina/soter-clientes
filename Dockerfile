FROM node:14-alpine AS build
WORKDIR /app
COPY . .
RUN npm install --force
## RUN npm run build --prod
RUN node --max-old-space-size=4096 node_modules/@angular/cli/bin/ng build --prod
# Serve application using Nginx server
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80