import Sample from "../models/sample.data.js";

export const Gets = async (req, res) => {
    try {
        const movies = await Sample.find();
        res.json(movies)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const Getone = async (req, res) => {
    try {
        const sampleid = await Sample.findById(req.params.id)
        if (sampleid == null) {
            return res.status(404).json({ message: "Sample not found" });
        }
        else {
            res.json(sampleid)
        }
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const Posts = async (req, res) => {

    const newSample = new Sample({
        title: req.body.title,
        desc: req.body.desc
    });
    try {
        const samples = await newSample.save();
        return res.status(200).json(samples);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

export const Updates = async (req, res) => {
    try {
        const result = await Sample.findByIdAndUpdate(
            { _id: req.params.id },
            {
                title: req.body.title,
                desc: req.body.desc
            },
            {
                new: true

            })
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const Deletes = async (req, res) => {
    try {
        const deleteid = await Sample.deleteOne({ _id: req.params.id });
        return res.status(200).json("movie deleted successfully");
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}