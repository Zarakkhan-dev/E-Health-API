import {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
} from "../Controller/serviceController.js";
import validateRequest from "../middleware/validateRequest.js";
import serviceValidationSchema from "../validation/serviceValidation.js";
import express from "express";

const router = express.Router();

router.route("/").post(validateRequest(serviceValidationSchema),createService).get(getAllServices);

router
  .route("/:id")
  .put(updateService)
  .delete(deleteService)
  .get(getServiceById);

export default router;
