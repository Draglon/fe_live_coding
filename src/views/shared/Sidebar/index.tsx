import { Row, Col } from "react-bootstrap";

import { NAVIGATION_MENU } from "@/lib/constants/navigation";
import Navigation from "@/views/shared/Navigation";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Row>
        <Col>
          <Navigation menu={NAVIGATION_MENU} />
        </Col>
      </Row>
    </div>
  );
};

export default Sidebar;
