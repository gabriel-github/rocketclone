import React from "react";

import { Card, Content } from "./style";

function Courses() {
  return (
    <Card>
      <Content>
        <div className="header-card">
          <p className="level">Nivel</p>
          <p className="level-number">01</p>
        </div>

        <h1>Curso</h1>

        <h2>Sua jornada</h2>

        <p>Lorem ipsum dolor</p>
      </Content>
    </Card>
  );
}

export default Courses;
