# BUHREC

## SETUP

### DB SETUP
Begin by installing postgres on your local machine

Create a user in postgres called hci with the ability to create databases using the command below

    CREATE USER hci WITH PASSWORD 'seng404' CREATEDB;

### Project SETUP
Run `go test` in the current directory of the Project

If the db setup is properyly done, all the tests should pass

