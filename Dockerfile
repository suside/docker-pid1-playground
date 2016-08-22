FROM alpine:3.4

RUN apk add --no-cache nodejs-lts tini

ADD nodeapp.js /nodeapp.js

ENV MY_TEST_ENV 'test env'

CMD ["sh", "-c", "exec /sbin/tini -- node /nodeapp.js ${MY_TEST_ENV}"]
