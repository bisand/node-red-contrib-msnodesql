const sql = require("msnodesqlv8");

module.exports = function (RED) {
    function MSNodeSql(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        var credentials = RED.nodes.getCredentials(config.connectionRef);

        node.on('input', function (msg) {

            if ((config.query === '') && (msg.payload === null || msg.payload === undefined || msg.payload === '')) {
                msg.payload = null;
                node.warn("No SQL query provided.")
                node.send(msg);
            }
            const query = config.query ? config.query : msg.payload;

            sql.query(credentials.connectionString, query, (err, rows) => {
                if (err) {
                    node.error(err);
                }
                msg.payload = rows;
                node.send(msg);
            });
        });
    }
    RED.nodes.registerType("msnodesql", MSNodeSql);
}
