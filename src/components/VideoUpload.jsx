import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
const props = {
  name: "file",
  // No real endpoint needed anymore
  customRequest({ file, onSuccess, onError }) {
    // Simulate async upload
    setTimeout(() => {
      // Call onSuccess to tell antd "upload finished"
      onSuccess('ok');
      // Optional: show a message here instead of in onChange
      message.success(`${file.name} file uploaded successfully (mock)`);
    }, 500);
  },
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const VideoUpload = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
);
export default VideoUpload;
