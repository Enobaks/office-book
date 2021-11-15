import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { DropzoneComponent } from "react-dropzone-component";

import ModuleNotification from "../../components/Widgets/Statistic/Notification";

const FileUpload = () => {
  const djsConfig = {
    addRemoveLinks: true,
    acceptedFiles: "image/jpeg,image/png,image/gif",
    autoProcessQueue: false,
    uploadprogress: 100,
    maxFiles: 1,
  };

  const config = {
    iconFiletypes: [".jpg", ".png", ".gif"],
    showFiletypeIcon: true,
    postUrl: "/",
    maxFiles: 1,
  };
  const rand = 1
  const eventHandlers = (file) => {
    console.log(file);
  };

  return (
    <React.Fragment>
      <Row>
        <Col sm={12}>
          <ModuleNotification
            message="For more info please check the components's official documentation"
            link="https://www.npmjs.com/package/react-dropzone-component"
          />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">File Upload</Card.Title>
            </Card.Header>
            <Card.Body>
              <DropzoneComponent
                config={config}
                eventHandlers={eventHandlers}
                djsConfig={djsConfig}
              />
              <Row className="text-center m-t-10">
                <Col>
                  <Button>Upload Files</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <DropzoneComponent
            config={config}
            eventHandlers={eventHandlers}
            djsConfig={djsConfig}
          />
          <Row className="text-center m-t-10">
            <Col>
              <Button>Company Logo</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default FileUpload;
