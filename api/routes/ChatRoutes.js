module.exports = function (app) {
    var Chat=require('../controllers/ChatController');

    app.get('/chats/:id?', function (req, res, next) {

        if (req.params.id) {
            Chat.getChatById(req.params.id, function (err, rows) {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(rows);
                }
            });
        }
        else {
            Chat.getAllChats(function (err, rows) {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(rows);
                }

            });
        }
    });
    app.post('/chats/', function (req, res, next) {

        Chat.addChat(req.body, function (err, count) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(req.body);//or return count for 1 &amp;amp;amp; 0
            }
        });
    });
    app.delete('/chats/:id', function (req, res, next) {

        Chat.deleteChat(req.params.id, function (err, count) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(count);
            }

        });
    });
}