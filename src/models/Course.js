const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

// auto create increment id
const autoIncrement = require('mongoose-sequence')(mongoose);

// auto create link slug based on name
mongoose.plugin(slug);

const Course = new Schema(
    {
        _id: { type: Number },
        name: { type: String },
        description: { type: String, maxLength: 600 },
        img: { type: String },
        video: { type: String, require: true },
        slug: { type: String, slug: 'name', unique: true },
    },
    { timestamps: true, _id: false }
);

Course.plugin(autoIncrement);

Course.plugin(mongooseDelete, { overrideMethods: true, deletedAt: true });

module.exports = mongoose.model('Course', Course);
