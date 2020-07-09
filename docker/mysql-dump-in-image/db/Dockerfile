FROM mysql:8.0.20

COPY dump.sql dump.sql

# RUN /usr/bin/mysqld_safe & sleep 5s \
#     && mysql -u root -e "CREATE DATABASE test" \
#     && mysql -u root test < dump.sql