FROM node:14 AS builder
WORKDIR /dandelion
COPY . .
RUN npm install && npm run build

FROM nginx:alpine AS runner
COPY containers/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /dandelion/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
