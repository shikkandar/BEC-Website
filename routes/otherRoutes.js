import express from 'express';
import otherController from '../controllers/otherController.js';
const app = express();
const router = express.Router();

router.get('/mou', otherController.showMOUPage);
router.get('/rd', otherController.showRDPage);
router.get('/edc', otherController.showEDCPage);
router.get('/iqac', otherController.showIQACPage);
router.get('/naac/ssr', otherController.showSSRPage);
router.get('/naac/criterea', otherController.showCriteriaPage);
router.get('/naac/dvv/metrics', otherController.showMetricsPage);
router.get('/naac/dvv/profile', otherController.showProfilePage);
router.get('/naac/bestpractises', otherController.showBestPractisesPage);
router.get('/naac/institute', otherController.showInstitutePage);
router.get('/naac/coc', otherController.showCOCPage);
router.get('/naac/capacity', otherController.showCapacityPage);
export default router;