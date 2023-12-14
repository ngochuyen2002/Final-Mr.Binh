const express = require("express")
const meetingRouter = express.Router();
const models = require('../models/meetingRequire');
const meetingController = require('../controller/meetingController')

meetingRouter.get("/meetingDemo" , meetingController.getAllDemo);
meetingRouter.post("/createMeeting" , meetingController.createMeeting);
meetingRouter.delete("/deleteMeeting/:id" , meetingController.deleteMeetingbyID);
meetingRouter.get("/getDatafromUserAndMeeting" , meetingController.getDatafromUserAndMeeting);
meetingRouter.put("/UpdateMeetingByID/:id" , meetingController.UpdateMeetingByID);
meetingRouter.get("/getByDate/:date" , meetingController.getByDate);
meetingRouter.get("/getAllBookingByUserID/:user_id" , meetingController.getAllBookingByUserID);

/**
 * @swagger
 * tags:
 *   name: MeetingRequests
 *   description: API for managing meeting requests
 * components:
 *   schemas:
 *     MeetingRequest:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the meeting request
 *         user_id:
 *           type: integer
 *           description: The user ID associated with the meeting request
 *         date:
 *           type: string
 *           format: date
 *           description: The date of the meeting request
 *         time_range:
 *           type: string
 *           description: The time range of the meeting request
 *         content:
 *           type: string
 *           description: The content or description of the meeting request
 *         status:
 *           type: string
 *           description: The status of the meeting request (e.g., pending, approved, rejected)
 * 

 * /createMeeting:
 * 
 *   post:
 *     summary: Create a new meeting request
 *     tags: [MeetingRequests]
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createMeeting'
 *     responses:
 *       201:
 *         description: Meeting request created successfully
 *         schema:
 *           $ref: '#/definitions/Success'
 *       400:
 *         description: Bad Request
 *         schema:
 *           $ref: '#/definitions/Error'
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           $ref: '#/definitions/Error'
 * 
 * /deleteMeetingbyID/{id}:
 *   delete:
 *     summary: Delete a meeting request by ID
 *     tags: [MeetingRequests]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The meeting request ID
 *     responses:
 *       200:
 *         description: Meeting request deleted successfully
 *         schema:
 *           $ref: '#/definitions/Success'
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           $ref: '#/definitions/Error'
 * 
 *   put:
 *     summary: Update the status of a meeting request by ID
 *     tags: [MeetingRequests]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The meeting request ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateMeetingByID'
 *     responses:
 *       200:
 *         description: Meeting request status updated successfully
 *         schema:
 *           $ref: '#/definitions/Success'
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           $ref: '#/definitions/Error'
 * 
 * /getByDate/{date}:
 *   get:
 *     summary: Get meeting requests by date
 *     tags: [MeetingRequests]
 *     parameters:
 *       - in: path
 *         name: date
 *         schema:
 *           type: string
 *         required: true
 *         description: The date to filter meeting requests
 *     responses:
 *       200:
 *         description: List of meeting requests for the specified date
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Status:
 *                   type: string
 *                 Data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/getByDate'
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           $ref: '#/definitions/Error'
 * 
 * /getAllBookingByUserID/{user_id}:
 *   get:
 *     summary: Get all meeting requests for a specific user
 *     tags: [MeetingRequests]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user ID to filter meeting requests
 *     responses:
 *       200:
 *         description: List of meeting requests for the specified user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Status:
 *                   type: string
 *                 Data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/getAllBookingByUserID'
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           $ref: '#/definitions/Error'
 * 
 * definitions:
 *   MeetingRequest:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       user_id:
 *         type: integer
 *       date:
 *         type: string
 *         format: date
 *       time_range:
 *         type: string
 *       content:
 *         type: string
 *       status:
 *         type: string
 * 
 *   MeetingRequestInput:
 *     type: object
 *     properties:
 *       user_id:
 *         type: integer
 *       date:
 *         type: string
 *         format: date
 *       time_range:
 *         type: string
 *       content:
 *         type: string
 *       status:
 *         type: string
 * 
 *   MeetingRequestStatusInput:
 *     type: object
 *     properties:
 *       status:
 *         type: string
 * 
 *   Success:
 *     type: object
 *     properties:
 *       Status:
 *         type: string
 * 
 *   Error:
 *     type: object
 *     properties:
 *       Status:
 *         type: string
 *       Error:
 *         type: string
 */





module.exports = meetingRouter;


