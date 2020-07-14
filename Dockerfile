FROM registry.access.redhat.com/ubi8/ubi:latest AS builder
RUN dnf install -y git npm httpd
RUN git clone https://github.com/beaker-project/dandelion
WORKDIR /dandelion
RUN npm install && npm run build

FROM nginx AS runner
COPY --from=builder /dandelion/dist /usr/share/nginx/html
