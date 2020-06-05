FROM registry.access.redhat.com/ubi8/ubi:latest AS builder
RUN dnf install -y git npm httpd
RUN git clone https://github.com/beaker-project/beaker-dashboard
WORKDIR /beaker-dashboard
RUN npm install && npm run build

FROM nginx AS runner
COPY --from=builder /beaker-dashboard/dist /usr/share/nginx/html
