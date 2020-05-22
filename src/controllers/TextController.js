// Require module
var SolrNode = require('solr-node');
// var solr = require('solr-client');

module.exports = async function (fastify) {
  fastify.post("/solr", {},
    async (request, reply) => {
      // // Set logger level (can be set to DEBUG, INFO, WARN, ERROR, FATAL or OFF)
      // require('log4js').getLogger('solr-client').level = 'DEBUG';

      // Create client
      var solrClient = new SolrNode({
        host: 'localhost',
        port: '8983',
        core: 'films',
        protocol: 'http'
      });
      // const data = {
      //   'name': 'osman',
      //   'directed_by': 'Sarı',
      //   'genre': 'osman',
      //   'id': '/en/cellular',
      //   'initial_release_date': '2004-09-10T00:00:00Z',
      //   '_version_': '1664758370448441344'
      // };

      // solrClient.update(data, function (err, result) {
      //   if (err) {
      //     console.log(err);
      //     return;
      //   }
      //   console.log('Response: ', result.responseHeader);
      // })
      console.log('kullanıcıdan gelen değer: ' + request.body.newfilm)
      let x = request.body.newfilm
      const name = {
        name: x
      };
// const name={
//   name: 'osman'
// }
      const searchQuery = solrClient.query()
        .q(name)
        .addParams({
          wt: 'json',
          indent: true
        })

      solrClient.search(searchQuery, function (err, result) {
        if (err) {
          console.log(err);
          return;
        }

        const response = result.response;
        console.log(response);
       
        if (response && response.docs) {
          response.docs.forEach((doc) => {
            console.log(doc);
            reply.send(doc.name);
          })
        }
      });


    });
}
























