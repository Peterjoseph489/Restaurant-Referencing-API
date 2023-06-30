const chopsModel = require('../models/chopsModel')
const resModel = require('../models/mainModel')


const newChops = async (req, res)=>{
    try {
        const user = await resModel.findById(req.params.id)
        const userOrder = await chopsModel.create(req.body)
        userOrder.link = user
        userOrder.save()
        if(req.body.refMax) {
            user.refMax.push(userOrder)
        } else if (req.body.citizenMeal) {
            user.citizenMeal.push(userOrder)
        } else if (req.body.chickWizz) {
            user.chickWizz.push(userOrder)
        }
        user.save()
        res.status(200).json({
            message: 'Comment created',
            data: userOrder
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}



const getAllChops = async (req, res)=>{
    try {
        const chops = await chopsModel.find();
        if(chops === 0) {
            res.status(404).json({
                message: 'No chops found'
            });
        } else {
            res.status(200).json({
                message: 'Successfully found',
                data: chops
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const getChopsById = async (req, res)=>{
    try {
        const comment = await chopsModel.findById(req.params.id);
        res.status(200).json({
            data: comment
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updateChops = async (req, res)=>{
    try {
        const update = await chopsModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!update) {
            res.status(404).json({
                message: 'Chops not found'
            })
        } else {
            res.status(200).json({
                message: 'Chops updated',
                data: update
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const deleteChops = async (req, res)=>{
    try {
        const userId = req.params.userId; 
        const chopsId = req.params.chopsId
        const user = await resModel.findById(userId);
        console.log(userId)
        console.log(req.params)
        // console.log(user);
        // console.log(user.comment);

        const deleteComment = await chopsModel.findByIdAndDelete(chopsId);
        
        
         await user.refMax.filter(element => element !== chopsId)
         await user.citizenMeal.filter(element => element !== chopsId)
         await user.chickWizz.filter(element => element !== chopsId)
       // await user.comment.pull(chopsId);
       console.log('seen')
        await user.save();
        if (!deleteComment) {
            res.status(404).json({
                message: 'cannot delete'
            });
        } else {
            res.status(200).json({
                message: 'success',
                data: deleteComment
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    newChops,
    getAllChops,
    getChopsById,
    updateChops,
    deleteChops
}