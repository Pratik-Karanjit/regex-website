import expressAsyncHandler from 'express-async-handler';
import { filterPatterns, getPatterns } from '../schema/regexPatternModel.js';

// Get all regex patterns
export const getAllPatterns = expressAsyncHandler(async (req, res, next) => {
    try {
      const patterns = getPatterns(); // Use the getPatterns function
      res.json(patterns);
    } catch (error) {
      next(error);
    }
  });

// Filter regex patterns by requirements
export const filterPatternsByRequirements = expressAsyncHandler(async (req, res, next) => {
  try {
    const { query } = req.query;
    const filteredPatterns =filterPatterns(query);
    res.json(filteredPatterns);
  } catch (error) {
    next(error);
  }
});
