const resModel = require('../models/mainModel')

const newOrder = async (req, res)=>{
    try {
        const newOrder = await resModel.create(req.body)
        res.status(200).json({
            message: 'Contact created successfully',
            data: newOrder
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getAllOrder = async (req, res)=>{
    try {
        const allOrder = await resModel.find();
        if (allOrder.length === 0) {
            res.status(400).json({
                message: 'No Order found'
            })
        } else {
            res.status(200).json({
                message: 'Orders found',
                data: allOrder
            });
        } 
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getOrderById = async (req, res)=>{
    try {
        const order = await resModel.findById(req.params.id).populate("refMax").populate("citizenMeal").populate("chickWizz")
        if (!order) {
            res.status(400).json({
                message: 'Order Found',
                data: order
            })
        } else {
            res.status(200).json({
                message: 'Order Gotten',
                data: order
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updateOrder = async (req, res)=>{
    try {
        const update = await resModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!update) {
            res.status(404).json({
                message: 'Not Updated'
            });
        } else {
            res.status(200).json({
                message: 'Updated successfully',
                data: update
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const deleteOrder = async (req, res)=>{
    try {
        const order = await resModel.findById(req.params.id);
        const deleteOrder = await resModel.findByIdAndDelete(req.params.id);
        if (!deleteOrder) {
            res.status(400).json({
                message: 'Order cannot be deleted'
            })
        } else {
            res.status(200).json({
                message: 'Order deleted successfully',
                data: order
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    newOrder,
    getAllOrder,
    getOrderById,
    updateOrder,
    deleteOrder
}