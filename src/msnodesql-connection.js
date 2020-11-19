module.exports = function (RED) {
    function MSNodeSqlConnection(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('export', () => {
            console.log('EXPORT! Nothing done!');
        });
    }
    RED.nodes.registerType('msnodesql-connection', MSNodeSqlConnection, {
        credentials: {
            connectionString: {
                type: 'text',
            },
        },
    });
};
