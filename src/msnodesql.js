const sql = require("msnodesqlv8");

module.exports = function (RED) {
    function MSNodeSql(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        var credentials = RED.nodes.getCredentials(config.connectionRef);

        node.on('input', function (msg) {
            // const connectionString = "server=srv2;Database=test;Driver={SQL Server Native Client 11.0};Uid=sa;Pwd=%Password123";
            const query = msg.payload;

            sql.query(credentials.connectionString, query, (err, rows) => {
                msg.payload = rows;
                node.send(msg);
            });
        });
    }
    RED.nodes.registerType("msnodesql", MSNodeSql);
}
