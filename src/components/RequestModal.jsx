import React, { useState } from "react";
import { Button, Modal, Select, Input } from "antd";
const { TextArea } = Input;
import VideoUpload from "./VideoUpload";

const RequestModal = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [feedbackType, setFeedbackType] = useState(null)

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSetFeedbackType = value => {
    setFeedbackType(value)
  }

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        className="mt-10 !bg-[#6dfffd] !text-black !font-bold !border-none !shadow-2xl"
      >
        Send request
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Select
          style={{ width: 240 }}
          onChange={handleSetFeedbackType}
          placeholder="Select feedback type"
          options={[
            { value: "message", label: "Message" },
            { value: "video", label: "Video" },
            { value: "custom", label: "Custom" },
          ]}
        />
        <p>Upload video</p>
        {/* <input type="file" accept="video/*" onChange={"handleFileChange"} className="pointer"/> */}
        <VideoUpload />
        <div className="mt-3">
          <p>Enter message</p>
          <TextArea
            rows={4}
            className="border border-slate-400 w-full h-20"
          />
        </div>
      </Modal>
    </>
  );
};
export default RequestModal;
