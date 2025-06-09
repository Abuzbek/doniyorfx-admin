import multer from "multer";
import slugfiy from "slugify";
import dayjs from "dayjs";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./public/images");
  },
  filename(req, file, cb) {
    const date = dayjs().format("DDMMYYYY-HHmmss_SSS");
    cb(null, `${date}_${slugfiy(file.originalname, "_")}`);
  },
});
export default multer({
  storage,
});
