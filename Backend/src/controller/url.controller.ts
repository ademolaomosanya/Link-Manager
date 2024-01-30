import { Request, Response } from "express";
import { UrlModel, UrlUpdate, UpdateDescriptionData } from "../models";

export class UrlController {
  private urlModel: UrlModel;

  constructor() {
    this.urlModel = new UrlModel();
  }

  createUrl = (req: Request, res: Response) => {
    const url = req.body;
    this.urlModel.createUrl(url, (err, result) => {
        if (err) {
            console.error("Error inserting data into MySQL database:", err);

            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(400).json({
                    success: false,
                    message: "URL already exists",
                    data: null,
                });
            } else {
                return res.status(500).json({
                    success: false,
                    message: "Internal server error",
                    data: null,
                });
            }
        }

        res.status(201).json({
            success: true,
            message: "Url saved successfully",
            data: url
        });
    });
};


  getUrls = (req: Request, res: Response) => {
    this.urlModel.getUrl((err, urls) => {
      if (err) {
        console.error("Error retrieving URLs from MySQL database:", err);
        res.status(500).json({
          success: false,
          message: "Internal server error",
          data: null,
        });
        return;
      }

      if (!urls || urls.length === 0) {
        res.status(404).json({
          success: false,
          message: "No URLs found",
          data: null,
        });
        return;
      }

      res.status(200).json({
        success: true,
        message: "URLs retrieved successfully",
        data: urls
      });
    });
};



  getSingleUrl = (req: Request, res: Response) => {
    const urlId = req.params.urlId;
    this.urlModel.getSingleUrl({urlId: parseInt(urlId)}, (err, urls) => {
      if (err) {
        console.error("Error retrieving URLs from MySQL database:", err);
        res.status(500).json({
          success: false,
          message: "Internal server error",
          data: null,
        });
        return;
      }

      if (!urls || urls.length === 0) {
        res.status(500).json({
          success: false,
          message: "Internal server error: URL not found",
          data: null,
        });
        return;
      }

      res.status(200).json({
        success: true,
        message: "URLs retrieved successfully",
        data: urls
      });
    });
};



updateUrl = (req: Request, res: Response) => {
  const updateData: UrlUpdate = req.body;
  const urlId = req.params.urlId;

  console.log(`Received request to update URL with ID ${urlId} to ${updateData.newUrl}`);

  this.urlModel.getSingleUrl({urlId: parseInt(urlId)}, (err, urls) => {
    if (err) {
      console.error("Error checking if URL exists in MySQL database:", err);
      res.status(500).json({
        success: false,
        message: "Internal server error",
        data: null,
      });
      return;
    }

    if (!urls || urls.length === 0) {
      res.status(404).json({
        success: false,
        message: "urlId not found for Url update",
        data: null,
      });
      return;
    }

    this.urlModel.updateUrl({ urlId: parseInt(urlId), newUrl: updateData.newUrl }, (updateErr, result) => {
      if (updateErr) {
        console.error("Error updating URL in MySQL database:", updateErr);
        res.status(500).json({
          success: false,
          message: "Internal server error",
          data: null,
        });
        return;
      }

      res.status(200).json({
        success: true,
        message: "URL updated successfully",
        data: updateData,
      });
    });
  });
};
 

updateDescription = (req: Request, res: Response) => {
  const updateData: UpdateDescriptionData = req.body;
  const urlId = req.params.urlId;
  
  this.urlModel.getSingleUrl({urlId: parseInt(urlId)}, (err, urls) => {
    if (err) {
      console.error("Error checking if URL exists in MySQL database:", err);
      res.status(500).json({
        success: false,
        message: "Internal server error",
        data: null,
      });
      return;
    }

    if (!urls || urls.length === 0) {
      res.status(404).json({
        success: false,
        message: "urlId not found for description update",
        data: null,
      });
      return;
    }

    this.urlModel.updateDescription({ urlId: parseInt(urlId), newDescription: updateData.newDescription }, (updateErr, result) => {
      if (updateErr) {
        console.error("Error updating description in MySQL database:", updateErr);
        res.status(500).json({
          success: false,
          message: "Internal server error",
          data: null,
        });
        return;
      }

      res.status(200).json({
        success: true,
        message: "Description updated successfully",
        data: updateData
      });
    });
  });
};


deleteUrl = (req: Request, res: Response) => {
  const urlId = req.params.urlId;

  console.log(`Received request to delete URL with ID ${urlId}`);

  this.urlModel.getSingleUrl({urlId: parseInt(urlId)}, (err, urls) => {
    if (err) {
      console.error("Error checking if URL exists in MySQL database:", err);
      res.status(500).json({
        success: false,
        message: "Internal server error",
        data: null,
      });
      return;
    }

    if (!urls || urls.length === 0) {
      res.status(404).json({
        success: false,
        message: "URL not found for deletion",
        data: null,
      });
      return;
    }

    this.urlModel.deleteUrl({urlId: parseInt(urlId)}, (deleteErr, result) => {
      if (deleteErr) {
        console.error("Error deleting URL from MySQL database:", deleteErr);
        res.status(500).json({
          success: false,
          message: "Internal server error",
          data: null,
        });
        return;
      }

      res.status(200).json({
        success: true,
        message: "URL deleted successfully",
        data: null 
      });
    });
  });
};

}
