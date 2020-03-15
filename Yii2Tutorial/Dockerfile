FROM php:7.4-rc-apache

COPY . /var/www/html
COPY apache.conf /etc/apache2/sites-available/000-default.conf

RUN a2enmod rewrite && service apache2 restart

EXPOSE 80
CMD ["apache2-foreground"]
