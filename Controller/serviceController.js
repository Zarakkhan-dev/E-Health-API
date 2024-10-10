import catchAsync from "../utils/catchAsync.js"
import Service from "../models/Service.js"
import appError from "../utils/appError.js";
//Create a new service
export const createService = catchAsync(async (req, res, next) => {
    const { serviceType, number } = req.body;
    
    const service = await Service.create({ serviceType, number });
    
    res.status(201).json({
        status: 'success',
        doc: service
    });
});

// Get all services
export const getAllServices = catchAsync(async (req, res, next) => {
    const services = await Service.find();
    console.log(services)
    res.status(200).json({
        status: 'success',
        doc: services
    });
});

// Get a service by ID
export  const getServiceById = catchAsync(async (req, res, next) => {
    const service = await Service.findById(req.params.id);
    
    if (!service) {
        return next(new appError('Service not found', 404));
    }
    
    res.status(200).json({
        status: 'success',
        doc: service
    });
});

// Update a service
export const updateService = catchAsync(async (req, res, next) => {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    
    if (!service) {
        return next(new appError('Service not found', 404));
    }
    
    res.status(200).json({
        status: 'success',
        doc: service
    });
});

// Delete a service
export const deleteService = catchAsync(async (req, res, next) => {
    const service = await Service.findByIdAndDelete(req.params.id);
    
    if (!service) {
        return next(new appError('Service not found', 404));
    }
    
    res.status(204).json({
        status: 'success',
        doc: null
    });
});

