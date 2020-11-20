const sql = require("msnodesqlv8");

module.exports = function (RED) {
    function MSNodeSql(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        var credentials = RED.nodes.getCredentials(config.connectionRef);

        node.on('input', function (msg) {
            if (msg.payload === null || msg.payload === undefined || msg.payload === '') {
                msg.payload = null;
                node.send(msg);
            }
            const query = msg.payload;

            sql.query(credentials.connectionString, query, (err, rows) => {
                msg.payload = rows;
                node.send(msg);
            });
        });
    }
    RED.nodes.registerType("msnodesql", MSNodeSql);
}
