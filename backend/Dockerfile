from mvertes/alpine-mongo

COPY seed.js /root

CMD mongod --fork --logpath=/var/log/mongo.log && mongo < /root/seed.js && tail -f /dev/null
