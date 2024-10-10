import  User from '../models/User.js';
import catchAsync from '../utils/catchAsync.js';
import { handleTokenGeneration } from '../middleware/tokenMiddleware.js';
import appError from '../utils/appError.js';


export const login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;


    if (!email || !password) {
        return next(new appError('Please provide email and password!', 400));
    }

    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.comparePassword(password))) {
        return next(new appError('Incorrect email or password', 401));
    }

    await handleTokenGeneration(user, res);
});


export const signup = catchAsync(async (req, res, next) => {
    const { username, email, password} = req.body;

    const newUser = await User.create({
        username,
        email,
        password,
    });

    await handleTokenGeneration(newUser, res);
});

export const logoutById = catchAsync(async (req, res, next) => {
    const {id} = req.params;  

    const user = await User.findById(id) 
    console.log(user);
    if(!user) {
        return  next(new appError("User not Found",404 ))
    }
    user.accessToken = null;
    user.refreshToken = null;
    await user.save();

    res.status(200).json({
        success: true,
        message: 'Logged out successfully',
    });
});


export const getAllUsers = catchAsync(async (req, res, next) => {
    const users = await User.find();
    res.status(200).json({
        success: true,
        results: users.length,
        doc: {
            users
        }
    });
});


export const getUserById = catchAsync(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(new appError('User not found', 404));
    }

    res.status(200).json({
        success: true,
        doc: {
            user
        }
    });
});


export const updateUserById = catchAsync(async (req, res, next) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators: true
    });

    if (!updatedUser) {
        return next(new appError('User not found', 404));
    }

    res.status(200).json({
        success: true,
        message : "Update Successfully!"
    });
});

export const deleteUserById = catchAsync(async (req, res, next) => {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
        return next(new appError('User not found', 404));
    }

    res.status(204).json({
        success: true,
        doc: null
    });
});
