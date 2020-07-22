#!/bin/sh
# wait-for-postgres.sh

set -e
  
shift
cmd="$@"
  
until PGPASSWORD=password psql -h "cumulative-trend-db-server" -U "admin" -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

until PGPASSWORD=password psql -h "daily-trend-db-server" -U "admin" -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

until PGPASSWORD=password psql -h "national-total-db-server" -U "admin" -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done
  
>&2 echo "Postgres is up - executing command"
exec $cmd