// ví dụ muốn them function logger từ file loger.js

import logger, { TYPE_ERROR, TYPE_LOG, TYPE_WARN } from "./logger.js";

logger("test mesage...", TYPE_ERROR);
