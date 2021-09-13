import React, { useState } from "react";
import { Modal, Image, Header, Button } from "semantic-ui-react";

const Employeemodal = ({ employee }) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button size="tiny" positive className="view-button">Details</Button>}>
      <Modal.Content image id="modal-container">
        <Image className="image" size="small" src={employee.avatar} wrapped />
        <Modal.Description>
          <Header className="name">
            {employee.first_name} {employee.last_name}
          </Header>
          <p className="email">Email: {employee.email}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black">Edit</Button>
        <Button negative>Delete</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default Employeemodal;
