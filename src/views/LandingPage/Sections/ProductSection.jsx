import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Done from "@material-ui/icons/Done";
import Explore from "@material-ui/icons/Explore";
import Assignment from "@material-ui/icons/Assignment";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Китара ли дочух?</h2>
            <h5 className={classes.description}>
              Класическата китара във Варна има близо 50-годишна традиция... Варненската китарна школа е известна с отлично подготвените си преподаватели и изпълнители, които печелят уважение в много национални и международни конкурси.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Уроци"
                description="Класическа Китара - Варна организира уроци по класическа китара при най-добрите преподаватели във Варна."
                icon={Assignment}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Събития"
                description="Класическа Китара - Варна организира организира събития като: Дни на класическата китара, Майсторски класове и Коледни празници."
                icon={Explore}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Цел"
                description="Основната цел е популяризиране на класическата китара и възможност за по-лесно взаимодействие между преподаватели, школи, училища, университети, други институти и организации в страната и по света. "
                icon={Done}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
