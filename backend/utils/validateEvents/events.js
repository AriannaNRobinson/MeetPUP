// import { check } from "express-validator";
// import { handleValidationErrors } from "../validation";

// const checkName = check('name')
//     .notEmpty()
//     .withMessage('Cannot be empty')

// const checkDescription = check('description')
//     .notEmpty()
//     .withMessage('Cannot be empty')

// const now = new Date();
// console.log(now)
// const checkDate = check('date')
//     .notEmpty()
//     .isDate({ min: now })
//     .withMessage('Event cannot be in the past')

// const checkCapacity = check('capacity')
//     .isInt({ min: 0 })
//     .withMessage('Must be a number')

// const checkHostId = check('hostId')
//     .notEmpty()
//     .isInt({ min: 0 })

// const checkLocationId = check('locationId')
//     .notEmpty()
//     .isInt({ min: 0 })


// exports.validateCreate = [
//     checkName,
//     checkDescription,
//     checkDate,
//     checkCapacity,
//     checkHostId,
//     checkLocationId,
//     handleValidationErrors
// ]
