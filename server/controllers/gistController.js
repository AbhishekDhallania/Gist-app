const Gist = require("../Schema/gistSchema");

// Create Gist
exports.createGist = async(req,res)=>{
    try {
        console.log('Received Gist:', req.body);
        const gist = await Gist.create(req.body);
        res.status(201).json(gist);
    } catch (error) {
        console.error('Error creating gist:', error); 
        res.status(500).json({error : error.message});
    }
};

// Get all gist of the owner
exports.getAllGist = async (req,res) => {
    try {
        const gist = await Gist.find();
        res.json(gist);
        if(!gist) return res.status(200).json({error : "You dont have any Gist"});
    } catch (error) {
        res.status(500).json({error : error.message});
    }
};

// Get one Gist of the owner
exports.getGist = async (req,res) => {
    try {
        const gist = await Gist.findById(req.params.id);
        if(!gist) return res.status(500).json({error : "Gist Not Found"});  
    } catch (error) {
        res.status(500).json({error : error.message});
        res.json(gist);
    }
};

// Update one Gist
exports.updateGist = async (req,res) => {
    try {
        const updatedGist = await Gist.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new : true}
        );
        if(!updatedGist) return res.status(500).json({error : "Gist Not Found"});
        res.json(updatedGist);
    } catch (error) {
        res.status(500).json({error : error.message});
        res.json(gist);
    }
};

// Delete a Gist
exports.deleteGist = async (req,res) => {
    try {
        const deletedGist = await Gist.findByIdAndDelete(req.params.id);
        if(!deletedGist) return req.status(404).json({error : "Gist Not Found"});
    } catch (error) {
        res.status(500).json({error : error.message});
    }
};


// //Delete all gist of a particular owner/user
// exports.deleteAllGist = async (req,res) => {
//     try {
//         const deleteAllGist = await Gist.find();

//     } catch (error) {
//         res.status(500).json({error : error.message});
//     }
// }