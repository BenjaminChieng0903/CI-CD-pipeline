# Use a specific, stable version of NGINX
FROM nginx:1.23.2

# Set the working directory (not strictly necessary for Nginx)
WORKDIR /usr/share/nginx/html

# Copy all configuration files
COPY nginx/config/nginx.conf /etc/nginx/nginx.conf
COPY nginx/config/dev/default.conf /etc/nginx/dev/default.conf
COPY nginx/config/common.headers.conf /etc/nginx/common.headers.conf
COPY nginx/config/mime.types /etc/nginx/mime.types

# Copy HTML files
COPY nginx/html/ /usr/share/nginx/html

# Expose the necessary port
EXPOSE 8088

# Make files in html folder accessible
RUN chmod -R 755 /usr/share/nginx/html
RUN chown -R nginx:nginx /usr/share/nginx/html


# Run NGINX
CMD ["nginx", "-g", "daemon off;", "-c", "nginx.conf"]