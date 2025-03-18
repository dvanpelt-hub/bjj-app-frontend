import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';

const props = {
  // action: '//jsonplaceholder.typicode.com/posts/',
  // listType: 'picture',
  // async previewFile(file) {
    // console.log('Your upload file:', file);
    // Your process logic. Here we just mock to the same file
    // const res = await fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
    //   method: 'POST',
    //   body: file,
    // });
    // const { thumbnail } = await res.json();
    // return thumbnail;
  // },
};

const VideoUpload = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Upload</Button>
  </Upload>
);
export default VideoUpload;