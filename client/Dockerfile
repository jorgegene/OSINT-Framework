# build environment
FROM node:alpine as build

WORKDIR /app
COPY . ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm run-script  build


# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]