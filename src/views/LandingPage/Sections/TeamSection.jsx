import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/faces/teacher1.jpg";
import team2 from "assets/img/faces/teacher2.jpg";
import team3 from "assets/img/faces/teacher4.jpg";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Част от преподавателите</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team1} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Боян Дойчев
                  <br />
                  <small className={classes.smallTitle}></small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Боян Дойчев е носител на много национални и международни
                    отличия от конкурси и фестивали. Участва в майсторските класове на: Георги Василев,
                    Хуберт Кепел, Стефан Гос, Пепе Ромеро, Серхио Гомез и други.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team2} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Боян Матев
                  <br />
                  <small className={classes.smallTitle}></small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Изработва първата си китара през 1993 г., а от 2004 г. е член на
                    „Регионалното сдружение на майсторите лютиери“ в Казанлък. От 1998 г. работи  като
                    лютиер и преподавател по китара в гр. Варна.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team3} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Анета Калеева
                  <br />
                  <small className={classes.smallTitle}> </small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Анета Калеева е член на Сдружение „Приятели на класическата китара“ – Варна
                    и жури в Традиционен музикален фестивал “Дни на класическата китара”  от създаването му до сега.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
