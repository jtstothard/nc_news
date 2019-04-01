const { remapDate } = require("../../utils/remap_date");
const { articles, comments, topics, users } = require("../data");

exports.seed = (knex, Promise) => {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      return knex.insert(topics).into("topics");
    })
    .then(() => {
      return knex.insert(users).into("users");
    })
    .then(() => {
      return knex.insert(remapDate(articles)).into("articles");
    })
    .then(() => {
      return knex.insert(remapDate(comments)).into("comments");
    });
};
