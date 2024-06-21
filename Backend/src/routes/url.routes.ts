import { Router } from "express";
import { UrlController } from "../controller";

export class UrlRouter {
  private urlsRouter: Router;
  private urlController: UrlController;

  constructor(urlController: UrlController) {
    this.urlsRouter = Router();
    this.urlController = urlController;
    this.initializeRoutes();
  }

  get router() {
    return this.urlsRouter;
  }

  private initializeRoutes() {
    /**
     * @swagger
     * /api/urls:
     *   post:
     *     summary: Save a new Url
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - tittle
     *               - url
     *               - description
     *             properties:
     *               tittle:
     *                 type:string
     *               url:
     *                 type: string
     *               description:
     *                 type: string
     *     tags:
     *       - Urls
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       201:
     *         description: Url saved Successfully
     */
    this.urlsRouter.post("/", this.urlController.createUrl);

    /**
     * @swagger
     * /api/urls:
     *   get:
     *     summary: Get all URLs
     *     tags:
     *       - Urls
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: URLs retrieved successfully
     *         content:
     *           application/json:
     *             example:
     *               success: true
     *               message: URLs retrieved successfully
     *               data: []
     */
    this.urlsRouter.get("/", this.urlController.getUrls);

 /**
     * @swagger
     * /api/urls/{urlId}:
     *   get:
     *     summary: Get a specific URL by ID
     *     parameters:
     *       - in: path
     *         name: urlId
     *         schema:
     *           type: number
     *         required: true
     *         description: The ID of the URL to retrieve
     *     tags:
     *       - Urls
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: URL retrieved successfully
     *         content:
     *           application/json:
     *             example:
     *               success: true
     *               message: URL retrieved successfully
     *               data: {}
     */
 this.urlsRouter.get("/:urlId", this.urlController.getSingleUrl);

    /**
     * @swagger
     * /api/urls/{urlId}:
     *   put:
     *     summary: Update a specific URL
     *     parameters:
     *       - in: path
     *         name: urlId
     *         schema:
     *           type: number
     *         required: true
     *         description: The ID of the URL to update
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - newUrl
     *             properties:
     *               newUrl:
     *                 type: string
     *     tags:
     *       - Urls
     *     responses:
     *       200:
     *         description: URL updated successfully
     */
    this.urlsRouter.put("/:urlId", this.urlController.updateUrl);

    /**
     * @swagger
     * /api/urls/{urlId}/description:
     *   put:
     *     summary: Update the description of a specific URL
     *     parameters:
     *       - in: path
     *         name: urlId
     *         schema:
     *           type: number
     *         required: true
     *         description: The ID of the URL to update the description
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - newDescription
     *             properties:
     *               newDescription:
     *                 type: string
     *     tags:
     *       - Urls
     *     responses:
     *       200:
     *         description: Description updated successfully
     */
    this.urlsRouter.put("/:urlId/description", this.urlController.updateDescription);

    /**
     * @swagger
     * /api/urls/{urlId}:
     *   delete:
     *     summary: Delete a specific URL and its description
     *     parameters:
     *       - in: path
     *         name: urlId
     *         schema:
     *           type: number
     *         required: true
     *         description: The ID of the URL to delete
     *     tags:
     *       - Urls
     *     responses:
     *       200:
     *         description: URL deleted successfully
     */
    this.urlsRouter.delete("/:urlId", this.urlController.deleteUrl);
  }
}
