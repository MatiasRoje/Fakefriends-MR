#!/usr/bin/env bash
# exit on error
set -o errexit

# NOTE: All of this must be active upon database reset
bundle install
yarn install
bundle exec rake assets:precompile
bundle exec rake assets:clean
# bundle exec rake db:drop DISABLE_DATABASE_ENVIRONMENT_CHECK=1
# bundle exec rake db:create
bundle exec rake db:migrate
# bundle exec rake db:seed