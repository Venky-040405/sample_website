import mongoose, { Schema, model } from "mongoose";

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
})

// create model

const Sample = model("Sample", schema);

export default Sample;