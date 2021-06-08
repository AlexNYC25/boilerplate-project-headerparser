
let url_shortner_schema = new mongoose.Schema({
    url: string,
    shortcut_path: string
});

let url_shortner_model = new mongoose.Model('url_shortner', url_shortner_schema)

model.exports = url_shortner_model;