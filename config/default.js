var env = process.env;

module.exports = {
  logEntries : {
    token: env.logEntriesToken
  },
  prerender  : {
    token: env.prerenderToken
  },
  loggerName : env.loggerName,
  httpPort   : process.env.PORT || env.httpPort || 3000,
  dbConfig   : {
    login      : env.db_login,
    pass       : env.db_pass,
    host       : env.db_host,
    port       : env.db_port,
    dbName     : env.db_dbName
  },
  socialMedia: {
    twitter  : '@unbendrecords'
  },
  abm: {
    baseUrl: 'http://unbend.be/'
  },
  ses: {
    key: env.ses_key,
    secret: env.ses_secret
  },
  mailchimp : {
    key: env.mailchimp_key,
    newsletterListId: env.mailchimp_newsletter_list_id
  }
};
